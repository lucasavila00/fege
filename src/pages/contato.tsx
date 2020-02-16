import * as React from "react";

import { Layout } from "../components/layout";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { OutboundBtn } from "../components/btns";
import { HeaderText } from "../components/common";

const Contato = () => (
  <Layout>
    <Stack
      verticalAlign="center"
      horizontalAlign="center"
      tokens={{ childrenGap: "m" }}
      style={{ width: "100%" }}
    >
      <HeaderText text="Contato" />
      <OutboundBtn
        title="Instagram @festaestranhavicosa"
        href="https://www.instagram.com/festaestranhavicosa/"
      />
      <OutboundBtn
        title="Facebook @festaestranhavicosa"
        href="https://www.facebook.com/festaestranhavicosa/"
      />
    </Stack>
  </Layout>
);

export default Contato;
