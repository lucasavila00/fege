import * as React from "react";

import { Layout } from "../components/layout";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { ImagePreviewBtn } from "../components/btns";
import { HeaderText } from "../components/common";
import cepa from "./cepa.jpg";
import rep from "./rep.jpg";

const Pontos = () => (
  <Layout>
    <Stack
      verticalAlign="center"
      horizontalAlign="center"
      tokens={{ childrenGap: "m" }}
    >
      <HeaderText text="Pontos de Venda" />
      <ImagePreviewBtn
        src={cepa}
        title="Cepatech (08h às 19h)"
        href="https://www.google.com/maps/place/CepaTech/@-20.7567381,-42.8788103,15.6z/data=!4m5!3m4!1s0x0:0x4ecc0a08115988ff!8m2!3d-20.757114!4d-42.87528"
        showPlay={false}
      />
      <ImagePreviewBtn
        src={rep}
        title="República Qkické"
        href="https://www.google.com/maps/place/R.+Bernardes+Filho,+229+-+Vicosa,+Vi%C3%A7osa+-+MG,+36570-000/@-20.756808,-42.8883897,17z/data=!3m1!4b1!4m5!3m4!1s0xa367dcdb48244d:0x27a1a901a5d8d19e!8m2!3d-20.756813!4d-42.886201"
        showPlay={false}
      />
    </Stack>
  </Layout>
);

export default Pontos;
