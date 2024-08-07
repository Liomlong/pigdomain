import React from 'react';
import Header from './components/Header';
import TonConnect from './components/TonConnectButton';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
    return (
        <TonConnectUIProvider manifestUrl="https://www.pig.tg/tonconnect-manifest.json">
            <div className="App">
                <Header />
                <TonConnect />
            </div>
        </TonConnectUIProvider>
    );
}

export default App;

