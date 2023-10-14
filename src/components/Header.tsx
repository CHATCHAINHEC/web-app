import React from 'react';
import ConnectButton from './ConnectWallet';
import DisconnectButton from './DisconnectWallet';

const Header = (props: any) => {
    return (
        <header>
            <h1>CHATCHAIN</h1>
            <ConnectButton {...props} />
            <DisconnectButton {...props} />
        </header>
    );
}

export default Header;
