import styled from 'styled-components/macro'

function Filter({
  onCategoryClick,
  activeCategory,
  productCategories,
  showFilters,
}) {
  return (
    <>
      <List showFilters={showFilters}>
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
  background-color: #2f4858;
  color: white;
  margin: 0;
  ${({ showFilters }) =>
    showFilters &&
    `
display: grid;
grid-template-columns: 50% 50%; 
grid-gap: 0.5rem;
`};
`

const Item = styled.li`
  border: 0.1rem solid white;
  border-radius: 0.6rem;
  padding: 0.3rem;
  width: fit-content;
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

export default Filter
