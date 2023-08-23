import Head from "next/head";

function HTMLHead(props) {
  return (
    <Head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/meta/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/meta/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/meta/favicon-16x16.png"
    />
    <link rel="manifest" href="/meta/manifest.json" />
    <link
      rel="mask-icon"
      href="/meta/safari-pinned-tab.svg"
      color="#0096ff"
    />
    <link rel="shortcut icon" href="/meta/favicon.ico" />
    <meta name="msapplication-TileColor" content="#0a0a14" />
    <meta name="msapplication-config" content="/meta/browserconfig.xml" />
    <meta name="theme-color" content="#0a0a14" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap"
      rel="stylesheet"
    />
  </Head>
  );
}

export default HTMLHead;
