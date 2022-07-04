import React, { useEffect } from 'react';
import { Button } from 'antd'
// import {
//     WalletModalProvider,
//     WalletDisconnectButton,
//     WalletMultiButton
// } from '@solana/wallet-adapter-react-ui';

import { useDispatch, useSelector } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import "./header.css";


export default function ProjectHeader() {

    const dispatch = useDispatch();
    var state = useSelector((state)=>state);

    const connectWallet = async () => {

        if (state && state.account) {
            dispatch({type: "DISCONNECT_WALLET"});
        } else {
            if (window.ethereum) {
                await window.ethereum.enable();
                dispatch({
                    type: "CONNECT_WALLET"
                });
            } else {
                NotificationManager.error("Please install metamask!", "Error", 2000);
            }
        }
    }

    return (
        <div style={{ background: 'transparent', marginTop: '50px' }}>
            <div className="site-button-ghost-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , padding:"0px 10%"}}>
                {/* <WalletModalProvider >
                    <WalletModalProvider>
                        <WalletMultiButton />
                    </WalletModalProvider>
                </WalletModalProvider> */}

                <Button type="primary" ghost className='mybtn show_pc' onClick={connectWallet}>                    
                    {state && state.account? state.account.slice(0,6) + "..." +state.account.slice(38): "Connect Wallet"}
                </Button>
                <div className='header_title' >
                    Space Blasterz
                </div>
                <Button type="primary" ghost className='mybtn show_pc' style={{visibility: "hidden"}}>
                    not visibility
                </Button>
            </div>
            <div className='show_mobile' >
                <Button type="primary" ghost className='mybtn' onClick={connectWallet}>                    
                    {state && state.account? state.account.slice(0,6) + "..." +state.account.slice(38): "Connect Wallet"}
                </Button>
            </div>
        </div>
    )
}
