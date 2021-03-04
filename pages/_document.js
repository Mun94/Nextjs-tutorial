import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // html, head, body태그를 만저야 할 때는 _document.js파일을 생성한다.
  render() {
    return (
      <Html lang="ko">
        <Head />{" "}
        {/* app에서의 head와 다른 역할임 title같은 속성을 여기서 설정하면 X*/}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
