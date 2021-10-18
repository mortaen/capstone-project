import { useState } from 'react'
import styled from 'styled-components/macro'
import FilterButton from './FilterButton'
import { FilterCategories } from './FilterCategories'

function Filter({ onCategoryClick, activeCategory }) {
  const [showFilters, setShowFilters] = useState(false)

  function showFilter() {
    setShowFilters(!showFilters)
  }

  return (
    <>
      <FilterButton showFilter={showFilter} />
      <List showFilters={showFilters}>
        {activeCategory !== '' ? (
          <Item onClick={() => onCategoryClick('')}>show all</Item>
        ) : (
          ''
        )}
        {FilterCategories.map((item, index) => {
          return (
            <Item key={index} onClick={() => onCategoryClick(item)}>
              {item}
            </Item>
          )
        })}
      </List>
    </>
  )
}

const List = styled.ul`
  display: none;
  list-style-type: none;
  background-color: #1f2933;
  color: white;
  ${({ showFilters }) =>
    showFilters &&
    `
display: block;
`};
`

const Item = styled.li`
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px;
  max-width: 35vw;
  margin: 7px 0px;
`

export default Filter
