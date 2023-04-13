import '../styles/globals.css'

import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from "../../next-i18next.config"

const MyApp = ({ Component, pageProps }) => (

  <Component {...pageProps} />
)

export default appWithTranslation(MyApp)

/* export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
 */