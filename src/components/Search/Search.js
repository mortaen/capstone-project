import { useHistory } from 'react-router'
import styled from 'styled-components/macro'

function Search({ searchQuery, setSearchQuery }) {
  const history = useHistory()

  function onSubmit(event) {
    history.push(`?q=${searchQuery}`)
    event.preventDefault()
  }

  return (
    <form
      action="/"
      method="get"
      autoComplete="off"
      onSubmit={event => onSubmit(event)}
    >
      <label>
        <Span>Search bar</Span>
        <input
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          type="text"
          name="search"
        />
      </label>
      <button>search</button>
    </form>
  )
}

const Span = styled.span`
  display: none;
`

export default Search
