import * as React from "react";
import { Text } from "office-ui-fabric-react/lib/Text";
import { getTheme } from "office-ui-fabric-react/lib/Styling";

export const HeaderText: React.FunctionComponent<{
  text: string;
}> = ({ text }) => {
  return (
    <Text
      variant="large"
      style={{
        fontWeight: "bold",
        color: getTheme().palette.themePrimary,
      }}
    >
      {text}
    </Text>
  );
};
