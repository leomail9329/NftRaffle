import React, { useEffect } from 'react';
import { Button } from 'antd'
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import { useDispatch, useSelector } from 'react-redux';
import { NotificationManager } from 'react-notifications';


export default function ProjectHeader() {

    const dispatch = useDispatch();
    var state = useSelector((state)=>state);

    const connectWallet = async () => {
        console.log("connect wallet");
        if (window.ethereum) {
            await window.ethereum.enable();
            dispatch({
                type: "CONNECT_WALLET"
            });
        } else {
            NotificationManager.error("Please install metamask!", "Error", 2000);
        }
    }

    return (
        <div style={{ background: 'transparent', marginTop: '50px' }}>
            <div className="site-button-ghost-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <WalletModalProvider >
                    <WalletModalProvider>
                        <WalletMultiButton />
                    </WalletModalProvider>
                </WalletModalProvider> */}

                <Button type="primary" ghost className='mybtn' onClick={connectWallet}>                    
                    {state && state.account? state.account.slice(0,6) + "..." +state.account.slice(38): "Connect Wallet"}
                </Button>
                <div style={{ fontFamily: 'font2', fontSize: '3.5rem', margin: '0px 20%' }}>
                    Space Blasterz
                </div>
                <Button type="primary" ghost className='mybtn' style={{visibility: "hidden"}}>
                </Button>
            </div>
        </div>
    )
}
