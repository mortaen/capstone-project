import styled from 'styled-components/macro'
import { MdSearch } from 'react-icons/md'
import { IconContext } from 'react-icons'

function Search({ searchQuery, onSearchInput, onSubmit }) {
  return (
    <Form autoComplete="off" onSubmit={onSubmit}>
      <label>
        <ScreenReaderOnly>Search bar</ScreenReaderOnly>
        <Input
          value={searchQuery}
          onInput={e => onSearchInput(e.target.value)}
          type="text"
          name="search"
        />
      </label>
      <IconContext.Provider value={{ size: '36', color: '#2f4858' }}>
        <StyledMdSearch />
      </IconContext.Provider>
    </Form>
  )
}

const StyledMdSearch = styled(MdSearch)`
  display: inline-flex;
  vertical-align: bottom;
`

const Form = styled.form`
  margin: 0;
  padding: 0;
`

const Input = styled.input`
  width: 80%;
  min-height: 2rem;
  margin: 1rem 0 0 2rem;
  border-radius: 0.3rem;
`

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
