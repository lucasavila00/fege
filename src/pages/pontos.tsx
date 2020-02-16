import * as React from "react";

import { Layout } from "../components/layout";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { OutboundBtn } from "../components/btns";
import { HeaderText } from "../components/common";

const Pontos = () => (
  <Layout>
    <Stack
      verticalAlign="center"
      horizontalAlign="center"
      tokens={{ childrenGap: "m" }}
    >
      <HeaderText text="Pontos de Venda" />
      <OutboundBtn
        title="Instagram @festaestranhavicosa"
        href="https://www.instagram.com/festaestranhavicosa/"
      />
    </Stack>
  </Layout>
);

export default Pontos;
