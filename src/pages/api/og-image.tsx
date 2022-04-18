/* eslint-disable @next/next/no-img-element */
import { ShieldFilled, TrophyFilled } from "@fluentui/react-icons";
import { Clan } from "@types";
import { withOGImage } from "next-api-og-image";
import { GothamBook } from "util/GothamBook";

const style = `
  @font-face {
    font-family: 'GothamBook';
    font-style:  normal;
    font-weight: normal;
    src: url(data:font/woff2;charset=utf-8;base64,${GothamBook}) format('woff2');
  }
`;

export default withOGImage<"query", Clan>({
  template: {
    // include HTML template here
    react: ({ name, icon, score, num_matches, tag }) => (
      <html>
        <head>
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </head>
        <body
          style={{
            margin: "0px",
            //height: "350px",
            height: "100%",
            //width: "1200px",
            width: "100%",
            backgroundColor: "#121212",
            display: "flex",
            flexDirection: "column",
            color: "#D1D5DB",
            fontFamily: "GothamBook",
          }}
        >
          <span
            style={{
              textAlign: "center",
              fontSize: "40px",

              marginTop: "50px",
            }}
          >
            HelO-System - Hell Let Loose Competitive Clan Ranking
          </span>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              padding: "50px",
              gap: "50px",
            }}
          >
            <div style={{ width: "200px" }}>
              <img
                src={icon || "http://helo-system.de/hll.png"}
                alt="Clan Logo"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "1000px",
                }}
              />
            </div>
            <div>
              <h1
                style={{
                  fontSize: "50px",
                  margin: "0",
                  color: "hsl(36, 100%, 50%)",
                }}
              >
                {tag}
              </h1>
              <h2 style={{ fontSize: "30px" }}>{name}</h2>
              <div
                style={{
                  display: "grid",
                  fontSize: "50px",
                  gridTemplateColumns: "repeat(2,max-content)",
                  alignItems: "center",
                  textAlign: "end",
                  gap: "10px",
                }}
              >
                <TrophyFilled style={{ color: "hsl(36, 100%, 50%)" }} />
                <span>{score}</span>
                <ShieldFilled />
                <span>{num_matches}</span>
              </div>
            </div>
          </div>
        </body>
      </html>
    ),
  },
  width: 1200,
  height: 450,
  cacheControl: "public, max-age=604800, immutable",
  dev: {
    inspectHtml: false,
  },
});
