import Router from "shared/Router";
import "./style/App.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { dark, light } from "style/theme";
import GlobalStyles from "style/GlobalStyle";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleDarkMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const handleFontMode = () => {};

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyles />
      <button onClick={handleDarkMode}>
        {theme === "light" ? "dark mode로 바꾸기" : "light mode로 바꾸기"}
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
