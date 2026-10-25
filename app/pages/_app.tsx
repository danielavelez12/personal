import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { FontSizeControls } from "../components/FontSizeControls";
import { CanvasArt } from "../components/CanvasArt";
import { SheetLift } from "../components/SheetLift";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/DV.png" />
      </Head>
      <CanvasArt />
      <SheetLift />
      <Component {...pageProps} />
      <FontSizeControls />
    </>
  );
}

export default MyApp;
