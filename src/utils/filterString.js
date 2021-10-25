export default function filterString(data, query, key) {
  return data.filter(item =>
    item[key].toLowerCase().includes(query.toLowerCase())
  )
}
