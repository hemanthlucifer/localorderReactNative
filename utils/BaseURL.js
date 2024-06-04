export default{
    baseUrl: 'http://192.168.224.119:8080/userservice',
    baseUrlProduct: 'http://192.168.224.119:8080/productservice',
    solrUrl1: "http://192.168.224.119:8983/solr/localorder/select?",
    solrUrlCityFilter: "fq=city%3A",
    solrUrlProdFilter: "&indent=true&q.op=OR&q=product_name%3A*",
    solrUrl2: "*&wt=json",
}