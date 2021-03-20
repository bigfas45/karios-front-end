import { Fragment, useState, useEffect } from "react"
import {  getFilteredProduct } from '../core/apiCore';
import ShowImageHomeCard from './ShowImageHomeCard'

const TrainingCardCom = () => {
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(3);
   const [skip, setSkip] = useState(0);
  const [filterResults, setFilterResults] = useState([]);

   const loadFilterResult = (newFilters) => {
     //console.log(newFilters);
     getFilteredProduct(skip, limit, newFilters).then((data) => {
       if (data.error) {
         setError(data.error);
       } else {
         setFilterResults(data.data);
       }
     });
  };
  
    useEffect(() => {
     loadFilterResult()
    }, []);
  
  
  return (
    <Fragment>
      {filterResults.map((product, i) => (
        <div class="entry col-12">
          <div class="grid-inner row no-gutters">
            <div class="col-auto">
              <div class="entry-image">
                <a href="#">
                  <ShowImageHomeCard item={product} url="product" />
                </a>
              </div>
            </div>
            <div class="col pl-3">
              <div class="entry-title">
                <h4>
                  <a href="#">{product.name}</a>
                </h4>
              </div>
              <div class="entry-meta">
                <ul>
                  <li>{product.timeLine}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default TrainingCardCom