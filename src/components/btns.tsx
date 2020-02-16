import * as React from "react";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import play from "./play.png";
import { getTheme } from "office-ui-fabric-react/lib/Styling";
import { Image } from "./img";
export const OutboundBtn: React.FunctionComponent<{
  title: string;
  href: string;
}> = ({ title, href }) => {
  return (
    <OutboundLink href={href} style={{ width: "100%" }}>
      <PrimaryButton style={{ width: "100%" }}>
        {title}
      </PrimaryButton>
    </OutboundLink>
  );
};
export const InboundBtn: React.FunctionComponent<{
  title: string;
  to: string;
}> = ({ title, to }) => {
  return (
    <Link to={to} style={{ width: "100%" }}>
      <PrimaryButton style={{ width: "100%" }}>
        {title}
      </PrimaryButton>
    </Link>
  );
};

export const ImagePreviewBtn: React.FunctionComponent<{
  title: string;
  href: string;
  src: any;
  showPlay: boolean;
}> = ({ title, href, src, showPlay }) => {
  return (
    <OutboundLink href={href} style={{ width: "100%" }}>
      <div
        style={{
          fontSize: 0,
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        <div
          style={{
            borderColor: getTheme().palette.themePrimary,
            borderWidth: 4,
            borderBottomWidth: 0,
            borderStyle: "solid",
            minHeight: 128,
            position: "relative",
          }}
        >
          {showPlay && (
            <div
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={play}
                style={{
                  height: 96,
                  width: 96,
                }}
              />
            </div>
          )}
          <Image src={src} />
        </div>
        <PrimaryButton
          style={{ width: "100%", borderRadius: 0 }}
        >
          {title}
        </PrimaryButton>
      </div>
    </OutboundLink>
  );
};
