import React from 'react';
import tonConnectUI from './ton/TonConnect';
import { sendMessage } from './TelegramBot';

function App() {
    const handleConnect = () => {
        tonConnectUI.connect();
        sendMessage("User connected with TON Wallet");
    };

    return (
        <div className="App">
            <h1>Welcome to PigDomain</h1>
            <button onClick={handleConnect}>Connect Wallet</button>
        </div>
    );
}

export default App;
