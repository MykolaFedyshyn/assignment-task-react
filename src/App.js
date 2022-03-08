import React,{useState,useEffect} from "react";
import storage from 'local-storage-fallback';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./styles.css";

const GlobalStyle = createGlobalStyle`
body{
  background-color:${props => {
    return props.theme.mode === "dark" ? "#111" : "#EEE";
  }};
  color:${props => (props.theme.mode === "dark" ? "#EEE" : "#111")};
}`;

function getInitialTheme(){
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : {mode:'dark'}
}
function App() {
  const [theme,setTheme] = useState(getInitialTheme)
  useEffect(()=>{
    storage.setItem('theme',JSON.stringify(theme))
  },[theme])
  
  const toggleTheme = () =>{
      setTheme(
        theme.mode === 'dark' ? 
        {mode:'light'} : {mode:'dark'}
      )
 }
   return(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
              <button onClick={toggleTheme}>Toggle </button>
          </div>
    </ThemeProvider>
  );
}

export default App;
