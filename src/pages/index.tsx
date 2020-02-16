import * as React from "react";
// import Link from 'gatsby-link'
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import logo from "./capa.jpg";
import { OutboundLink } from "gatsby-plugin-google-analytics";

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
const Header: React.FunctionComponent = () => {
  return (
    <img src={logo} style={{ width: "100%" }} />
    // <div
    //   style={{
    //     height: 128 + 64,
    //     backgroundImage: `url(${logo})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "contain",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // />
  );
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

const Index: React.FunctionComponent<IndexPageProps> = () => {
  return (
    <Layout>
      <Stack tokens={{ childrenGap: "m" }}>
        <Header />
        <Stack tokens={{ childrenGap: "l1" }}>
          <Btn
            title="Comprar Online"
            href="https://www.instagram.com/festaestranhavicosa/"
          />
          <Btn
            title="Mapa do Evento"
            href="https://www.instagram.com/festaestranhavicosa/"
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
      </Stack>
    </Layout>
  );
};

export default Index;
