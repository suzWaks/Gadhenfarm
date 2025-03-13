import { useTheme } from "@/context/theme-context";

// Component updated to remove dark mode functionality
export function ThemeToggle() {
  // Using the simplified theme context
  const { theme } = useTheme();
  
  // Since we've removed dark mode, this component doesn't need to toggle anything
  // We could either remove it completely or keep a simplified version
  
  return (
    <div className="hidden">
      {/* This component is hidden since we don't support theme toggling anymore */}
    </div>
  );
}
