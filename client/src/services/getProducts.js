export default function getProducts() {
  return fetch('/api/products').then(res => res.json())
}
