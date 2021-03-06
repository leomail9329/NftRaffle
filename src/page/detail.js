import * as React from 'react';
import discord from '../assets/img/discord.png'
import twitter from '../assets/img/twitter.png'
import congrat from '../assets/img/congrat.png'
import fPoint from '../assets/img/fPoint.png'
import 'animate.css';

import vNft1 from "../assets/img/nft1.mp4";
import vNft2 from "../assets/img/nft2.mp4";
import vNft3 from "../assets/img/nft3.mp4";


import { Button, Card } from 'antd'
import { useParams } from 'react-router-dom';
import "./detail.css";

const { Meta } = Card;
const nfts = [vNft1, vNft2, vNft3];



export default function NftDetail() {
    const params = useParams();

    return (
        <div style={{ marginTop: '100px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {/* <div className='animate__animated animate__zoomInUp detail-content'> */}
            <div className='detail-content'>
                <div className='nft-detail' >
                    {/* <img src={defaultNft} style={{ width: '100%' }} /> */}
                    <video src={nfts[params.id - 1]} style={{ width: '100%', borderRadius:"20px"}} autoPlay loop/>
                    <div className='nftDetaildescription'>
                        <span>Description</span>
                    </div>
                    <div className='nftDetaildescriptioncontent'>
                        <span>
                            Lorem Ipsum Dollar Lorem Ipsum Dollar Lorem
                            Ipsum Dollar Lorem Ipsum Dollar Lorem Ipsum
                            Dollar Lorem Ipsum Dollar Lorem Ipsum Dollar Lorem Ipsum Dollar Lorem
                            Ipsum Dollar Lorem Ipsum Dollar Lorem Ipsum
                            Dollar Lorem Ipsum Dollar
                            Lorem Ipsum Dollar Lorem Ipsum Dollar Lorem
                            Ipsum Dollar Lorem Ipsum Dollar Lorem Ipsum
                            Dollar Lorem Ipsum Dollar </span>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap:"wrap" }}>
                        {/* <div> */}
                            <span style={{ fontSize: '30px', fontFamily: 'font1', marginRight: '20px' , wordBreak:"none"}}>Space Blasterz</span>
                            <img src={discord} style={{ width: '40px', marginLeft: '20px', borderRadius: '40px' }} />
                            <img src={twitter} style={{ width: '40px', margin: '0px 20px', borderRadius: '40px' }} />
                        {/* </div> */}
                        <div style={{ marginLeft: '20px', background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px', marginTop:"20px" }}>
                            <img src={fPoint} style={{}} />
                            <span>Raffle Closed</span>
                        </div>
                    </div>
                    <div className='detail-item-container'>
                        <div className='nftDetailDiv detail-item'>
                            <span style={{ flex: '1' }}>Project</span>
                            <span>Space Blasterz</span>
                        </div>
                        <div className='nftDetailDiv detail-item'>
                            <span style={{ flex: '1' }}>Collection</span>
                            <span>2114</span>
                        </div>
                        <div className='nftDetailDiv detail-item'>
                            <span style={{ flex: '1' }}>Winners</span>
                            <span>30</span>
                        </div>
                        <div className='nftDetailDiv detail-item'>
                            <span style={{ flex: '1' }}>Nfts</span>
                            <span>1</span>
                        </div>
                    </div>
                    <div className='nftDetailDiv auction'>
                        <span style={{ textAlign: 'center', color: 'black' }}>Auction Closed</span>
                        <div style={{ justifyContent: 'center', marginTop: '20px' }}>
                            <img src={congrat} style={{ width: '40px', marginRight: '20px'}} />
                            <span>Congrats To </span>
                            <span style={{ color: '#a900ff', fontSize: '15px', wordBreak:"break-word" }}>
                                0x8B6e132456BEA45954befF3488B4c7e245128b7d
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
