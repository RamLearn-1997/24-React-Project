import "./App.css"; // You can define your styles here

import UseLocalStorage from "./useLocalStorage";

function ThemeMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "light"); // 'light' or 'dark'

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <h1>Hello React Programmer</h1>
      <button onClick={handleToggleTheme}>
        {theme === "light" ? "Dark Theme" : "Light Theme"}
      </button>
    </div>
  );
}

export default ThemeMode;
