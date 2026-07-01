import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>酷狗AIK音乐解析下载器</title>
        <meta name="description" content="酷狗音乐AIK分享链接解析，自动提取MP3下载地址" />
        <script defer src="https://tj.076666.xyz/qft.js" data-website-id="6d83aefd-a686-453a-b4a5-189c088e1f3d"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
