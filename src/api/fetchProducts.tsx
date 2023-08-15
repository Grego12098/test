import axios from "axios";

const fetchProducts = async() => {
  return await axios.post("https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI", {
    "query": "toilets",
    "pageNumber": 0,
    "size": 0,
    "additionalPages": 50,
    "sort": 1,
    "facets": {
        // "prices": [{
        //       "identifier": "3D-02-FC-D0-B1-8F-65-51",
        //       "value": {
        //           "gte": 150.0,
        //           "lte": 200.0
        //       }
        // }],
        // "toiletStyle": [{
        //       "identifier": "1A-0D-8E-F5-02-80-29-13",
        //       "value": "Modern"
        // }]
    }  
  });
}

export default fetchProducts;