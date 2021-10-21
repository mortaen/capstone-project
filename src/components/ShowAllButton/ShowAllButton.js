import { useHistory } from 'react-router'

export default function ShowAllButton({ setActiveCategory, setSearchQuery }) {
  const history = useHistory()

  function showAllProducts() {
    history.push('/')
    setActiveCategory('')
    setSearchQuery('')
  }

  return <button onClick={showAllProducts}>show all</button>
}
