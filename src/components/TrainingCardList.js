import { Fragment, useState, useEffect } from "react"
import { getFilteredProductList } from '../core/apiCore';
import ShowImageHomeCard from './ShowImageHomeCard'

const TrainingCardCom = () => {
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(10);
   const [skip, setSkip] = useState(0);
  const [filterResults, setFilterResults] = useState([]);

   const loadFilterResult = (newFilters) => {
     //console.log(newFilters);
     getFilteredProductList(skip, limit, newFilters).then((data) => {
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
      <div class="entry col-12">
        <div class="grid-inner row no-gutters">
          <div class="col pl-3">
            <div class="entry-title">
              <h4>
                <ul>
                  {filterResults.map((product, i) => (
                    <Fragment>
                      <li>{product.name}</li><br/>
                    </Fragment>
                  ))}
                </ul>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TrainingCardCom