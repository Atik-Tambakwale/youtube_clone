import axios from 'axios';
let KEY = "AIzaSyDXsYCdvF4N_c60Sq1ZtxtdJ - qIGUVh8ms";

export const baseParams = {
    part: "snippet",
    maxResults: 10,
    key: KEY
};

let YoutubeApi = axios.create({baseURL: 'https://www.googleapis.com/youtube/v3'});

export default YoutubeApi;
