import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import logo from "./capa.jpg";
import video1 from "./video1.jpg";
import play from "./play.png";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { getTheme } from "office-ui-fabric-react/lib/Styling";
import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
const Image: React.FunctionComponent<{ src: any }> = ({
  src,
}) => {
  return <img src={src} style={{ width: "100%" }} />;
};
const Btn: React.FunctionComponent<{
  title: string;
  href: string;
}> = ({ title, href }) => {
  return (
    <OutboundLink href={href}>
      <PrimaryButton style={{ width: "100%" }}>
        {title}
      </PrimaryButton>
    </OutboundLink>
  );
};
const VidBtn: React.FunctionComponent<{
  title: string;
  href: string;
  src: any;
}> = ({ title, href, src }) => {
  return (
    <OutboundLink href={href}>
      <div
        style={{
          fontSize: 0,
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        <div
          style={{
            borderColor: getTheme().palette.themePrimary,
            borderWidth: 4,
            borderBottomWidth: 0,
            borderStyle: "solid",
            minHeight: 128,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={play}
              style={{
                height: 96,
                width: 96,
              }}
            />
          </div>
          <Image src={src} />
        </div>
        <PrimaryButton
          style={{ width: "100%", borderRadius: 0 }}
        >
          {title}
        </PrimaryButton>
      </div>
    </OutboundLink>
  );
};

const Index: React.FunctionComponent<IndexPageProps> = () => {
  return (
    <Layout>
      <Stack tokens={{ childrenGap: "m" }}>
        <Image src={logo} />
        <ProgressIndicator
          label="1º Lote"
          description="50% vendido"
          percentComplete={0.5}
        />
        <Btn
          title="Comprar Online"
          href="https://www.instagram.com/festaestranhavicosa/"
        />
        <VidBtn
          src={video1}
          title="Mapa do Evento"
          href="https://www.youtube.com/watch?v=G2mhr6s2Tv8"
        />
        <Btn
          title="Pontos de Venda"
          href="https://www.instagram.com/festaestranhavicosa/"
        />
        <Btn
          title="Página do Insta"
          href="https://www.instagram.com/festaestranhavicosa/"
        />
        <Btn
          title="Evento no Face"
          href="https://www.instagram.com/festaestranhavicosa/"
        />
        <Btn
          title="Contato"
          href="https://www.instagram.com/festaestranhavicosa/"
        />
      </Stack>
    </Layout>
  );
};

export default Index;
