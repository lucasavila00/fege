import * as React from "react";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import { Layout } from "../components/layout";
import { HeaderText } from "../components/common";
import { Stack } from "office-ui-fabric-react/lib/Stack";

const delay = (ms: number) =>
  new Promise((rs) => setTimeout(rs, ms));
export const Redirector: React.FunctionComponent<{
  url: string;
}> = ({ url }) => {
  React.useEffect(() => {
    trackCustomEvent({
      category: "Outbound Link",
      action: "click",
      label: url,
    });
    delay(1000).then(() => {
      window.location.replace(url);
    });
  }, []);
  return (
    <Layout>
      <Stack
        verticalAlign="center"
        horizontalAlign="center"
        tokens={{ childrenGap: "m" }}
      >
        <HeaderText text="Carregando..." />
      </Stack>
    </Layout>
  );
};
