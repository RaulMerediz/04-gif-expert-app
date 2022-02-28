import {giphyKey} from './giphyKey'
export const getGifs =async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${giphyKey}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(cluster =>{
        return {
            id: cluster.id,
            title: cluster.title,
            url: cluster.images?.downsized_medium.url

        }
    })
    return gifs;

}