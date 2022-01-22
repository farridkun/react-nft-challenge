import React, { useEffect, useState } from 'react';
import './Main.css';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

const Main = ({ selectedNFT, nftListData}) => {
    const [activeNFT, setActiveNFT] = useState(nftListData[0]);

    useEffect(() => {
        setActiveNFT(nftListData[selectedNFT])
    }, [nftListData, selectedNFT])

  return (
      <div className="main">
          <div className="mainContent">
                <div className="nftHighlight">
                    <div className="nftContainer">
                        <img
                            src={activeNFT.image_url}
                            className="selectedNFT"
                            alt="activeHighlightNFT"
                        />
                    </div>
                </div>

                <div className="nftDetails" style={{ color: '#fff' }}>
                    <div className="title">
                        {activeNFT.name}
                        <span className="itemNumber">•#{activeNFT.token_id}</span>
                    </div>
                    <div className="owner">
                        <div className="ownerImageContainer">
                            <img
                                src="https://avatars.githubusercontent.com/u/50895949?v=4"
                                alt="Owner Detail"
                            />
                        </div>
                        <div className="ownerDetails">
                            <div className="ownerNameAndHandle">
                                <div>{activeNFT.owner.address}</div>
                                <div className="ownerHandle">@farridkun</div>
                            </div>
                            <div className="ownerLink">
                                <img src={instagramLogo} alt="@Farrid_jr" />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} alt="@kuntoro_farrid" />
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon} alt="@FarridKun" />
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  )
};

export default Main;
