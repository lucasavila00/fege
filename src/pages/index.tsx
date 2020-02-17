import * as React from "react";
import { Layout } from "../components/layout";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import { Text } from "office-ui-fabric-react/lib/components/Text";
import video1 from "./video1.jpg";
import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import {
  OutboundBtn,
  InboundBtn,
  ImagePreviewBtn,
} from "../components/btns";
import { sconfig } from "../components/config";
import { getTheme } from "office-ui-fabric-react/lib/Styling";

const Index: React.FunctionComponent = () => {
  return (
    <Layout>
      <Stack tokens={{ childrenGap: "m" }}>
        <ProgressIndicator
          label="Lote Promocional (R$10)"
          description="Início das vendas dia 03/03 às 12h (Itaú - UFV)"
          percentComplete={0}
        />
        <OutboundBtn
          title="Compre Online"
          href={sconfig.online}
        />
        <InboundBtn to="/pontos" title="Pontos de Vendas" />
        <ImagePreviewBtn
          src={video1}
          title="Assista ao After Movie"
          href="https://www.youtube.com/watch?v=oXCAHbPwR2s"
          showPlay={true}
        />
        <OutboundBtn
          title="Confirme Presença no Evento"
          href={sconfig.evento}
        />
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
