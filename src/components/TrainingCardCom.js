import { Fragment, useState, useEffect } from "react"
import {  getFilteredProduct } from '../core/apiCore';
import ShowImageHomeCard from '../components/ShowImageHomeCard'

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
      <div className="col-lg-4 col-md-6">
        <div className="fancy-title title-border">
          <h4>Recently Posted Trainings</h4>
        </div>

        <div className="posts-sm row col-mb-30" id="home-recent-news">
          {filterResults.map((product, i) => (
            <div className="entry col-12">
              <div className="grid-inner row no-gutters">
                {/* image */}

                <ShowImageHomeCard item={product} url="product" />

                <div className="col pl-3">
                  <div className="entry-title">
                    <h4>
                      <a href="#">{product.name}</a>
                    </h4>
                  </div>
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="icon-calendar3"></i> {product.timeLine}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default TrainingCardCom