import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    const title = "Walter Woodward's Portfolio Website";
  const description = "Learn more about Walter's career as a Full Stack Web Developer.";
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:site_name" content="walterwoodward.dev" />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />

        <meta property="og:url" content="https://walterwoodward.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="walterwoodward.dev" />
        <meta property="twitter:url" content="https://walterwoodward.dev" />
        <meta name="twitter:title" content="Home" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
