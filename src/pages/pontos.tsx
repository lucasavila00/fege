import * as React from "react";

import { Layout } from "../components/layout";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { ImagePreviewBtn } from "../components/btns";
import { HeaderText } from "../components/common";
import cepa from "./cepa.png";
import rep from "./rep.png";

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
        href="https://www.google.com/maps/place/R.+Bernardes+Filho,+229+-+Santa+Clara,+Vi%C3%A7osa+-+MG,+36570-000/@-20.7568839,-42.8879078,17z/data=!3m1!4b1!4m5!3m4!1s0xa367dcc366ee13:0xfb482e2793e69477!8m2!3d-20.7568873!4d-42.8864086"
        showPlay={false}
      />
    </Stack>
  </Layout>
);

export default Pontos;
