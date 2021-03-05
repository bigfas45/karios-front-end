import React from 'react';
import {API} from '../config';

const ShowImage = ({ item, url }) => (
    
    <div className="entry-image col-md-4 mb-md-0">
        <a href="#">
         <img src={`${API}/${url}/photo/${item._id}`} alt={item.name} />
        </a>
      </div>

);


export default ShowImage;