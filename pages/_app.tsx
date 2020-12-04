import Layout from '../src/layout/Layout';
import globalStyles from '../styles/index.style';

function DashboardEditor({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{globalStyles}</style>
    </Layout>
  )
}

export default DashboardEditor
