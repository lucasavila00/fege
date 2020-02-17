import * as React from "react";

export const Image: React.FunctionComponent<{
  src: any;
}> = ({ src }) => {
  return (
    <img
      src={src}
      style={{ width: "100%" }}
      // height={512}
      // width={910}
    />
  );
};
