import React,{ useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.style";
import { AppContext } from "./contexts/AppContext";
import { calcFactorA } from "./helpers/helper";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState({ mode: 'default' });
  const [factorA] = useState(calcFactorA());
  const [chartData, setChartData] = useState(null);
  const [userData, setUserData] = useState("");
  const [tablePage, setTablePage] = useState([]);
  const providerData = useMemo(
    () => ({ 
      factorA,
      chartData, 
      userData, 
      tablePage,
      setChartData, 
      setUserData,
      setTablePage
    }), 
    [chartData, userData, tablePage]
  );

  const getThemeMode = () => {
    return theme.mode === 'dark' ? 
        { mode:'light' } : { mode:'dark' }
  }

  const currentTheme = getThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={providerData}>
        <GlobalStyle />
        <div className="App">
          <nav className="navigation-buttons">
            <Link to="/screen-one">
              <button className="navigation-button">Screen 1</button>
            </Link>
            <Link to="/screen-two">
              <button className="navigation-button">Screen 2</button>
            </Link>
          </nav>
          <button onClick={() => setTheme(currentTheme)} className="theme-toggle-button">
            Switch to {currentTheme.mode} mode
          </button>
          <Outlet />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
