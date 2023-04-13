import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="max-w-5xl flex flex-col md:flex-row mx-4 lg:mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
