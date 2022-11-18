export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Laf5Ie3ZrI8XBPsqTFsHMP2hsk5PpAKP&q=${category}&limit=20`
    const resp = await fetch( url )
    const { data } = await resp.json()
  
    const gifs = data.map( img => (
      {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    ))
  
    return gifs
  
  }