export default function filterArray(data, query, key) {
  return data.filter(item =>
    item[key].some(el => el.toLowerCase().includes(query.toLowerCase()))
  )
}
