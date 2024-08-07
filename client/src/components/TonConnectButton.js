import React from 'react';
import { TonConnectButton, useTonConnect } from '@tonconnect/ui-react';

const TonConnect = () => {
    const { connected, account } = useTonConnect();

    return (
        <div>
            <TonConnectButton />
            {connected && <div>Connected as: {account}</div>}
        </div>
    );
};

export default TonConnect;
