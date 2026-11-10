import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Router } from 'next/router'
import Layout from '../components/Layout'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { useStore } from '../store/store'
import createEmotionCache from '../utils/createEmotionCache'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import theme from '../styles/theme/theme'
import 'nprogress/nprogress.css'
import '../styles/globals.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const clientSideEmotionCache = createEmotionCache()

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  NProgress.configure({ showSpinner: false })
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      {typeof window !== 'undefined' ? (
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CacheProvider>
      ) : (
        <PersistGate loading={null} persistor={persistor}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </CacheProvider>
        </PersistGate>
      )}
    </Provider>
  )
}

export default MyApp
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
