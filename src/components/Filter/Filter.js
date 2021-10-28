import { useState } from 'react'
import styled from 'styled-components/macro'
import FilterButton from './FilterButton'

function Filter({ onCategoryClick, activeCategory, productCategories }) {
  const [showFilters, setShowFilters] = useState(false)

  function showFilter() {
    setShowFilters(!showFilters)
  }

  return (
    <>
      <FilterButton showFilter={showFilter} />
      <List showFilters={showFilters}>
        {activeCategory !== '' ? (
          <ShowAll onClick={() => onCategoryClick('')}>show all</ShowAll>
        ) : (
          ''
        )}
        {productCategories.map((item, index) => {
          return (
            <Item
              activeCategory={activeCategory}
              item={item}
              key={index}
              onClick={() => onCategoryClick(item)}
            >
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
  ${({ activeCategory, item }) =>
    activeCategory === item
      ? `
          background-color: white;
          color: #1f2933;
        `
      : `
          color: inherit;
        `};
`

const ShowAll = styled.li`
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px;
  max-width: 35vw;
  margin: 7px 0px;
`

export default Filter
