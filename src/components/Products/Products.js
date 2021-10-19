import { IconContext } from 'react-icons'
import { AiOutlineFileAdd, AiOutlineHome } from 'react-icons/ai'
import styled from 'styled-components/macro'
import CustomLink from '../CustomLink/CustomLink'
import Filter from '../Filter/Filter'
import ProductCard from '../ProductCard/ProductCard'

function Products({
  shownData,
  onCategoryClick,
  activeCategory,
  filterCategories,
  onAddRating,
  ratings,
}) {
  return (
    <>
      <Heading>
        <AiOutlineHome /> Products
      </Heading>
      <IconContext.Provider value={{ color: '#1f2933', size: '25px' }}>
        <CustomLink
          path="/product-form"
          name="Add Item"
          icon={<AiOutlineFileAdd />}
        />
      </IconContext.Provider>
      <Filter
        onCategoryClick={onCategoryClick}
        activeCategory={activeCategory}
        filterCategories={filterCategories}
      />
      <CardList>
        {shownData.map(product => (
          <ProductCard
            name={product.name}
            description={product.description}
            image={product.image}
            id={product.id}
            key={product.name}
            onAddRating={onAddRating}
            ratings={ratings}
          />
        ))}
      </CardList>
    </>
  )
}

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  padding: 0;
`

const Heading = styled.h2`
  text-align: center;
`

export default Products
