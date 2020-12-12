import { Provider } from 'react-redux';
import MainLayout from '../components/layout'
import DefaultLayout from '../components/defaultLayout'
import store from '../redux';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <Provider store={store}>
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    </Provider>
  )
}

App.getInitialProps = async ctx => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()

  return { pageProps: json.owner }
}