import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import "./normalize.css";
import "./layout.css";
import {
  createTheme,
  loadTheme,
} from "office-ui-fabric-react/lib/Styling";
import { Helmet } from "react-helmet";
import logo from "./capa.jpg";
import { Image } from "./img";
import { Link } from "gatsby";

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Festa Estranha com Gente Esquisita</title>
      </Helmet>

      <Stack horizontalAlign="center">
        <Stack
          tokens={{ padding: "m", childrenGap: "s1" }}
          style={{
            width: "100%",
            maxWidth: 512,
          }}
        >
          <Link to="/">
            <Image src={logo} />
          </Link>
          {children}
        </Stack>
      </Stack>
    </>
  );
};
