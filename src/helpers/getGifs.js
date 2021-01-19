const url = 'https://api.giphy.com/v1/gifs/search'
const key = 'k16ASPVCoedoLPauW2yiLARxn6hBKFUu'

export const getGifs = async (category) => {
  const urlFetch = `${url}?q=${encodeURI(category)}&limit=10&api_key=${key}`
  const res = await fetch(urlFetch)
  const { data } = await res.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }))

  return gifs
}