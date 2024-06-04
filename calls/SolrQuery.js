import axios from 'axios';
import BaseURL from '../utils/BaseURL';


export default SolrQuery = async (searchWord,city)=>{
    
    try{
        console.log(`${BaseURL.solrUrl1}${BaseURL.solrUrlCityFilter}${city}${BaseURL.solrUrlProdFilter}${searchWord}${BaseURL.solrUrl2}`);
        const response = await axios.get(`${BaseURL.solrUrl1}${BaseURL.solrUrlCityFilter}${city}${BaseURL.solrUrlProdFilter}${searchWord}${BaseURL.solrUrl2}`);
        console.log(response.data);
        return response.data;
    }catch(e){
        console.log(e);
    }

}