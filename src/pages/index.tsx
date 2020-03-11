import * as React from "react";
import { Layout } from "../components/layout";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import { Text } from "office-ui-fabric-react/lib/components/Text";
// import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import {
  OutboundBtn,
  InboundBtn,
  ImagePreviewBtn,
} from "../components/btns";
import { sconfig } from "../components/config";
import { getTheme } from "office-ui-fabric-react/lib/Styling";
import { useStaticQuery, graphql } from "gatsby";

const Index: React.FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "video1.jpg" }) {
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
    <Layout>
      <Stack tokens={{ childrenGap: "m" }}>
        {/* <ProgressIndicator
          label="Primeiro Lote (R$30)"
          description="78% vendido"
          percentComplete={0.78}
        />
        <ProgressIndicator
          label="Ingressos totais"
          description="1365/2000"
          percentComplete={1365 / 2000}
        /> */}
        {/* <OutboundBtn
          title="Compre Online"
          href={sconfig.online}
        />
        <InboundBtn to="/pontos" title="Pontos de Vendas" /> */}
        <ImagePreviewBtn
          src={data.file.childImageSharp.fluid}
          title="Assista ao After Movie"
          href="https://www.youtube.com/watch?v=oXCAHbPwR2s"
          showPlay={true}
        />
        {/* <OutboundBtn
          title="Confirme Presença no Evento"
          href={sconfig.evento}
        /> */}
        <InboundBtn
          to="/contato"
          title="Entre em Contato"
        />
        <OutboundBtn
          title="Siga no Instagram"
          href={sconfig.instagram}
        />
        <OutboundBtn
          title="Curta no Facebook"
          href={sconfig.facebook}
        />
        <Stack
          tokens={{ childrenGap: "m" }}
          style={{ paddingTop: 16 }}
          horizontalAlign="center"
        >
          <Text
            variant={"large"}
            style={{
              color: getTheme().palette.themePrimary,
            }}
          >
            Patrocínio
          </Text>
          <OutboundBtn
            title="Cepatech @cepatechvicosa"
            href="https://www.instagram.com/cepatechvicosa/"
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Index;
