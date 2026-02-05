import Logo from "../components/Logo";
import { ThemeToggle } from "../components/ThemeToggle";
import { useTheme } from "../hooks/useTheme";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="block top-0 w-full z-50 bg-background/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Logo />

        <div className="flex items-center gap-4">
          <a href="#projects" className="hover:text-primary text-primary">Projects</a>
          <a href="#contact" className="hover:text-primary text-primary">Contact</a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
}