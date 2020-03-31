import axios from 'axios';

const API_URL = 'https://pomber.github.io/covid19/timeseries.json';


const getAll =  () =>
{
    const request = axios.get(API_URL)
    return  request.then(response => response.data)
}


export default {
    getAll:getAll,
}