import React, { useState } from "react";
import "./App.css";
import { Box, grommet } from "grommet";
import { Grommet } from "grommet";
import { TedHead } from "./shared/TedHead";
import { deepMerge } from "grommet/utils";
import { theme } from "./shared/themes";
import {RootLayout} from "./components/RootLayout";
import { fetchThemeSetting, updateThemeSetting } from "./shared/storage";
const theme_merged = deepMerge(grommet, theme);

function App() {
  const [darkMode, toggleDarkLight] = useState(fetchThemeSetting(false));
  return (
    <Grommet full theme={theme_merged} themeMode={darkMode ? "dark" : "light"} >
      <Box fill>
        <TedHead
          darkMode={darkMode}
          toggleDarkLight={() => {
            toggleDarkLight(!darkMode);
            updateThemeSetting(!darkMode);
          }}
        />
        <RootLayout darkMode={darkMode} />
      </Box>
    </Grommet>
  );
}

export default App;
