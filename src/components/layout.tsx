import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import "./normalize.css";
import "./layout.css";
import {
  createTheme,
  loadTheme,
} from "office-ui-fabric-react/lib/Styling";
const myTheme = createTheme({
  palette: {
    themePrimary: "#380251",
    themeLighterAlt: "#e1cfea",
    themeLighter: "#c8a7d7",
    themeLight: "#af83c4",
    themeTertiary: "#9863b1",
    themeSecondary: "#82479e",
    themeDarkAlt: "#6e308b",
    themeDark: "#5b1c78",
    themeDarker: "#490d65",
    neutralLighterAlt: "#f8d47a",
    neutralLighter: "#f4d178",
    neutralLight: "#eac873",
    neutralQuaternaryAlt: "#dabb6b",
    neutralQuaternary: "#d0b266",
    neutralTertiaryAlt: "#c8ab62",
    neutralTertiary: "#595959",
    neutralSecondary: "#373737",
    neutralPrimaryAlt: "#2f2f2f",
    neutralPrimary: "#000000",
    neutralDark: "#151515",
    black: "#0b0b0b",
    white: "#ffdb7e",
  },
});
loadTheme(myTheme);
export const Layout: React.FunctionComponent = ({
  children,
}) => {
  return (
    // <Customizer {...myTheme}>
    <Stack tokens={{ padding: "m" }}>{children}</Stack>
    // </Customizer>
  );
};
