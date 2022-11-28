import React from "react";


import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import "./global.css";
import Layout from "../components/Layout";
import { NextPage } from "next/types";


//--------------------------------------------------------------
type MyAppProps = {
  Component: NextPage,
  pageProps: any,
}



export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme();

  return (
    <Layout>
      
      <ThemeProvider theme={muiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}


//--------------Deprecated

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };



// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: React.ReactElement) => React.ReactNode;
// };

// interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache;
//   Component: NextPageWithLayout;
// }