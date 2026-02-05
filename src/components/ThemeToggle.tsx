type Props = {
    theme: "light" | "dark";
    setTheme: (t: "light" | "dark") => void;
  };
  
  export function ThemeToggle({ theme, setTheme }: Props) {
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="px-3 py-2 rounded border dark:border-zinc-700"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    );
  }
  