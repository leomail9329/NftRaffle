import * as React from 'react';

import vNft1 from "../assets/img/nft1.mp4";
import vNft2 from "../assets/img/nft2.mp4";
import vNft3 from "../assets/img/nft3.mp4";


import fPoint from '../assets/img/fPoint.png'
import sPoint from '../assets/img/sPoint.png'
import bHeart from '../assets/img/bHeart.png'
import rHeart from '../assets/img/rHeart.png'
import winner from '../assets/img/winner.png'
import wallet from '../assets/img/wallet.png'
import 'animate.css';
import './raffle.css';

import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom';

import idl from "../assets/raffle.json"
const { Meta } = Card;

export default function Raffle() {

    const navigate = useNavigate();

    const NFTDetail = (index) => {
        navigate('/detail/' + index)
    }

    const gotoAuction = () => {
        navigate('/auction')
    }

    return (
        <div style={{ marginTop: '100px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
           
            <div className='card-content'>
                <Card
                    onClick={()=>{NFTDetail(1)}}
                    className='animate__animated animate__zoomInUp'
                    grid
                    style={{ margin: '20px 3%', border: '0px', padding: '10px', minWidth: '23%', maxWidth: '23%', justifyContent: 'center', display: 'grid', background: '#ffffff66', borderRadius: '30px', cursor: 'pointer' }}
                    cover={<video src={vNft1} style={{width:'100%', borderRadius:"20px"}} autoPlay loop/>}
                >
                    <div style={{ borderRadius: '10px', margin: '10px 0px' , position:'relative'}}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', width: '100%', top: '-70px', padding: '0px 20px' }}>
                            <div style={{ background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px' }}>
                                <img src={fPoint} style={{}} />
                                <span>Raffle Closed</span>
                            </div>
                            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{ background: 'white', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                                    <img src={bHeart} style={{ width: '25px', height: '25px' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>Lorem Ipsum</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '15px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>
                                Lorem Ipsum dollar commet,
                                Lorem Ipsum dollar Lorem Ipsum dollar Lorem Ipsum dollar commet,
                            </span>
                        </div>
                        <div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={winner} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>No of Winners</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 7</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={wallet} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>Ticket Sold</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 256</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <button className='btn-view'>
                                    View Winners
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card
                    onClick={()=>{NFTDetail(2)}}
                    className='animate__animated animate__zoomInUp'
                    grid
                    style={{ margin: '20px 3%', border: '0px', padding: '10px', minWidth: '23%', maxWidth: '23%', justifyContent: 'center', display: 'grid', background: '#ffffff66', borderRadius: '30px', cursor: 'pointer' }}
                    cover={<video src={vNft2} style={{width:'100%', borderRadius:"20px"}} autoPlay loop/>}
                >
                    <div style={{ borderRadius: '10px', margin: '10px 0px', position:"relative" }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', width: '100%', top: '-70px', padding: '0px 20px' }}>
                            <div style={{ background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px' }}>
                                <img src={fPoint} style={{}} />
                                <span>Raffle Closed</span>
                            </div>
                            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{ background: 'white', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                                    <img src={bHeart} style={{ width: '25px', height: '25px' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>Lorem Ipsum</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '15px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>
                                Lorem Ipsum dollar commet,
                                Lorem Ipsum dollar Lorem Ipsum dollar Lorem Ipsum dollar commet,
                            </span>
                        </div>
                        <div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={winner} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>No of Winners</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 7</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={wallet} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>Ticket Sold</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 256</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <button className='btn-view'>
                                    View Winners
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card
                    onClick={()=>{NFTDetail(3)}}
                    className='animate__animated animate__zoomInUp'
                    grid
                    style={{ margin: '20px 3%', border: '0px', padding: '10px', minWidth: '23%', maxWidth: '23%', justifyContent: 'center', display: 'grid', background: '#ffffff66', borderRadius: '30px', cursor: 'pointer' }}
                    cover={<video src={vNft3} style={{width:'100%', borderRadius:"20px"}} autoPlay loop/>}
                >
                    <div style={{ borderRadius: '10px', margin: '10px 0px' , position:"relative"}}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', width: '100%', top: '-70px', padding: '0px 20px' }}>
                            <div style={{ background: 'black', color: 'white', fontFamily: 'font1', padding: '3px 10px', borderRadius: '50px' }}>
                                <img src={sPoint} style={{}} />
                                <span>Ends in 2d 4h 34m</span>
                            </div>
                            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{ background: 'white', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                                    <img src={rHeart} style={{ width: '25px', height: '25px' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>Lorem Ipsum</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '15px', fontFamily: 'font1', color: '#413253', textAlign: 'left' }}>
                                Lorem Ipsum dollar commet,
                                Lorem Ipsum dollar Lorem Ipsum dollar Lorem Ipsum dollar commet,
                            </span>
                        </div>
                        <div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={winner} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>No of Winners</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 7</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <img src={wallet} style={{ width: '40px' }} />
                                <div style={{ padding: '0px 15px' }}>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>Ticket Sold</span>
                                    <span style={{ fontSize: '20px', fontFamily: 'font1', color: '#413253' }}>: 256</span>
                                </div>
                            </div>
                            <div style={{ padding: '0px 10px', display: 'flex', alignItems: 'center' }}>
                                <button className='btn-view'>
                                    View Winners
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
