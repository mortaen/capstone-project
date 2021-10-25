import { useHistory } from 'react-router'
import styled from 'styled-components/macro'

function Search({ searchQuery, onSearchInput }) {
  const history = useHistory()

  function handleSubmit(event) {
    history.push(`?q=${searchQuery}`)
    event.preventDefault()
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <ScreenReaderOnly>Search bar</ScreenReaderOnly>
        <input
          value={searchQuery}
          onInput={e => onSearchInput(e.target.value)}
          type="text"
          name="search"
        />
      </label>
      <button>search</button>
    </form>
  )
}

const ScreenReaderOnly = styled.span`
  display: inline-block;
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
`

export default Search
