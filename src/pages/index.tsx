import * as React from "react";
// import Link from 'gatsby-link'
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button"
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import logo from "./capa.jpg"

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
  return <div
    style={{
      height: 128 + 64,
      backgroundImage: `url(${logo})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}
  />
}

const Index: React.FunctionComponent<IndexPageProps> = () => {
  return (
    <Layout>
      <Stack tokens={{ childrenGap: "m" }}>

        <Header />
        <Stack tokens={{ childrenGap: "l1" }}>
          <PrimaryButton>Comprar online</PrimaryButton>
          <PrimaryButton>Mapa do Evento</PrimaryButton>
          <PrimaryButton>Pontos de venda</PrimaryButton>
          <PrimaryButton>Página do Insta</PrimaryButton>
          <PrimaryButton>Evento no Face</PrimaryButton>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Index;
