import React from 'react';
import './CardList.css';
import CollectionCard from './CollectionCard';

const CardList = ({ cardListData, selectedNFT }) => {
  return (
      <div className="cardList">
          {cardListData.map((list) => (
              <div onClick={() => selectedNFT(list.token_id)}>
                  <CollectionCard
                    key={list.token_id}
                    id={list.token_id}
                    name={list.name}
                    traits={list.traits}
                    image={list.image_url}
                  />
              </div>
          ))}
      </div>
  )
};

export default CardList;
