import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center w-12">
      <div className="relative">
        <input 
          type="checkbox" 
          id="toggle" 
          checked={theme === 'dark'} 
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="sr-only"
        />
        <label 
          htmlFor="toggle" 
          className="flex h-6 w-12 cursor-pointer items-center rounded-full bg-gray-300 p-1"
        >
          <div className={`${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'} h-4 w-4 rounded-full bg-white shadow-md transform duration-300 ease-in-out flex items-center justify-center`}>
            {theme === 'dark' ? <Moon className="h-3 w-3 text-primary" /> : <Sun className="h-3 w-3 text-accent" />}
          </div>
        </label>
      </div>
    </div>
  );
}
