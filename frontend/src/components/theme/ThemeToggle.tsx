"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("qr-vision-theme") as Theme | null;

    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("qr-vision-theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={mounted ? toggleTheme : undefined}
      aria-label="Toggle theme"
      title={mounted ? `Current theme: ${theme}` : "Toggle theme"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-(--card) text-(--card-foreground) shadow-sm transition hover:bg-(--muted)"
    >
      {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}