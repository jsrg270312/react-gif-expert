export const getGifs = async(category) => {
    console.log('GetGifts')
    const apiKey = 'Wy0GBDtierR4YNmjLmuc9ijKh73aFt3v'
    const url= `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=10`;
    const response = await  fetch(url);
    
    const {data = []} = await response.json()
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}