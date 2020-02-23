export default function fetchData(url) {
  return fetch(url, {
    method: 'get'
  })
}
