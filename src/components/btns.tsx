import * as React from "react";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link, useStaticQuery, graphql } from "gatsby";
import { getTheme } from "office-ui-fabric-react/lib/Styling";
import Img from "gatsby-image";

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
  const data = useStaticQuery(graphql`
    query {
      play: file(relativePath: { eq: "play.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 96, height: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
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
              <Img
                fixed={data.play.childImageSharp.fixed}
                alt="Reproduzir vídeo"
                style={{
                  zIndex: 999,
                }}
              />
            </div>
          )}
          <Img fluid={src} alt={title} />
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
