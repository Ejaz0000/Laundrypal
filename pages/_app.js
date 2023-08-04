import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import "tw-elements/dist/css/tw-elements.min.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
