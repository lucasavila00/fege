import * as React from "react";
import { Layout } from "../components/layout";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import video1 from "./video1.jpg";
import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import {
  OutboundBtn,
  InboundBtn,
  VidBtn,
} from "../components/btns";
import { sconfig } from "../components/config";

const Index: React.FunctionComponent = () => {
  return (
    <Layout>
      <Stack tokens={{ childrenGap: "m" }}>
        <ProgressIndicator
          label="1º Lote"
          description="50% vendido"
          percentComplete={0.5}
        />
        <OutboundBtn
          title="Comprar Online"
          href={sconfig.online}
        />
        <VidBtn
          src={video1}
          title="Mapa do Evento"
          href="https://www.youtube.com/watch?v=G2mhr6s2Tv8"
        />
        <InboundBtn to="/pontos" title="Pontos de Vendas" />
        <OutboundBtn
          title="Página do Insta"
          href={sconfig.instagram}
        />
        <OutboundBtn
          title="Página do Face"
          href={sconfig.facebook}
        />

        <OutboundBtn
          title="Evento no Face"
          href={sconfig.evento}
        />
        <InboundBtn to="/contato" title="Contato" />
      </Stack>
    </Layout>
  );
};

export default Index;
