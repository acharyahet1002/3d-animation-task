// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import ThreeDSlider from "./components/ThreeDSlider";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Description selectedIndex={selectedIndex} />
        <main>
          <ThreeDSlider onChange={(index) => setSelectedIndex(index)} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
