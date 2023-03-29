import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { wrapper } from "../redux/store";


export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return(
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}