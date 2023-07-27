import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "style";
import Router from "shared/Router";

const App = () => {
  const [themeMode, setThemeMode] = useState({ light: "light", font: "small" });

  const handleDarkMode = () => {
    themeMode.light === "dark"
      ? setThemeMode({ ...themeMode, light: "light" })
      : setThemeMode({ ...themeMode, light: "dark" });
  };

  const handleFontMode = () => {};

  // TODO button UI
  return (
    <ThemeProvider theme={themeMode.light === "light" ? theme.dark : theme.light}>
      <GlobalStyles />
      <button onClick={handleDarkMode}>
        {themeMode.light === "light" ? "light mode로 바꾸기" : "dark mode로 바꾸기"}
      </button>

      <select onChange={handleFontMode}>
        <option value={1}>small</option>
        <option value={2}>medium</option>
        <option value={3}>large</option>
      </select>
      <Router />
    </ThemeProvider>
  );
};

export default App;
