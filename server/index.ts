import express, { NextFunction, type Request, Response } from "express";
import path from "path";
import { registerRoutes } from "./routes";
import { log, serveStatic, setupVite } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;
  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });
  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Error handling middleware - fixed syntax errors (removed asterisks)
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    console.error(err); // Log the error instead of throwing it
  });

  // Serve static files based on environment
  if (process.env.NODE_ENV === "production") {
    // Explicitly serve static files from the Vite build output directory
    app.use(express.static(path.join(process.cwd(), "dist/public")));
    
    // Catch-all route to handle SPA routing
    app.get("*", (req, res) => {
      // Skip API routes
      if (req.path.startsWith("/api")) {
        return next();
      }
      res.sendFile(path.join(process.cwd(), "dist/public/index.html"));
    });
  } else {
    // Development mode
    await setupVite(app, server);
  }

  // Server setup
  const port = process.env.PORT || 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${port}`);
  });
})();
