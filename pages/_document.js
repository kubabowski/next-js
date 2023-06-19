import Document, { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from "next/router";

function MyDocument() {
    
  return (
    <Html>
      <Head>
        {/* Add the reCAPTCHA script */}
        <script src="https://www.google.com/recaptcha/api.js?render=6LcssqYmAAAAAENyLa2pmLao2cfPCXJwM7Cv_fxQ"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;