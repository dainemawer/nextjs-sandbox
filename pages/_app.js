import { ConfigContext } from '@context/config';
import { useAmp } from 'next/amp'

import '@styles/app.scss';

function MyApp({ Component, pageProps }) {
    const isAmp = useAmp();
    const store = {
        isAmp
    };

    return (
        <ConfigContext.Provider value={store}>
            <Component {...pageProps} />
        </ConfigContext.Provider>
    )
}

export default MyApp;