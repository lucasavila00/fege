import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Separator } from "office-ui-fabric-react/lib/Separator";
import "./normalize.css";
import "./layout.css";
import {
  createTheme,
  loadTheme,
  getTheme,
} from "office-ui-fabric-react/lib/Styling";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const myTheme = createTheme({
  palette: {
    themePrimary: "#ff7700",
    themeLighterAlt: "#0a0500",
    themeLighter: "#291300",
    themeLight: "#4d2400",
    themeTertiary: "#994700",
    themeSecondary: "#e06900",
    themeDarkAlt: "#ff8519",
    themeDark: "#ff983d",
    themeDarker: "#ffb370",
    neutralLighterAlt: "#111132",
    neutralLighter: "#15153a",
    neutralLight: "#1d1d48",
    neutralQuaternaryAlt: "#232350",
    neutralQuaternary: "#282857",
    neutralTertiaryAlt: "#404074",
    neutralTertiary: "#4a3c2f",
    neutralSecondary: "#94775d",
    neutralPrimaryAlt: "#daaf89",
    neutralPrimary: "#f7c79c",
    neutralDark: "#f9d4b3",
    black: "#fbdfc7",
    white: "#0d0d2a",
  },
});

loadTheme(myTheme);

export const Layout: React.FunctionComponent = ({
  children,
}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "capa.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Logotipo da festa"
            />
          </Link>
          {children}
        </Stack>
      </Stack>

      <Separator
        styles={{
          root: {
            selectors: {
              "::before": {
                backgroundColor: getTheme().palette
                  .themePrimary,
              },
            },
          },
        }}
      />
      <OutboundLink
        href="https://lucasavila.com"
        style={{
          color: getTheme().palette.themePrimary,
          textDecoration: "none",
        }}
      >
        <Stack
          tokens={{ childrenGap: "s2", padding: "m" }}
          horizontalAlign="center"
        >
          <Text
            variant={"large"}
            style={{
              color: getTheme().palette.themePrimary,
            }}
          >
            Desenvolvido por Lucas Ávila
          </Text>
          <Text
            variant={"small"}
            style={{
              color: getTheme().palette.themePrimary,
              textDecoration: "underline",
            }}
          >
            lucasavila.com
          </Text>
        </Stack>
      </OutboundLink>
    </>
  );
};
