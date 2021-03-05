import React from 'react';
import {API} from '../config';

const ShowImageHomeCard = ({ item, url }) => (
  <div className="col-auto">
    <div className="entry-image">
      <a href={`/training-details/${item._id}`}>
        <img src={`${API}/${url}/photo/${item._id}`} alt={item.name} />
      </a>
    </div>
  </div>
);


export default ShowImageHomeCard;