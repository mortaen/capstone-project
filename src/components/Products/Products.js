import { IconContext } from 'react-icons'
import { AiOutlineFileAdd, AiOutlineHome } from 'react-icons/ai'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import CustomLink from '../CustomLink/CustomLink'
import Filter from '../Filter/Filter'
import ProductCard from '../ProductCard/ProductCard'
import Search from '../Search/Search'
import ShowAllButton from '../ShowAllButton/ShowAllButton'

function Products({
  shownData,
  onCategoryClick,
  activeCategory,
  setActiveCategory,
  filterCategories,
  onAddRating,
  ratings,
  searchQuery,
  onSearchInput,
}) {
  const history = useHistory()

  function handleShowAllProducts() {
    history.push('/')
    setActiveCategory('')
    onSearchInput('')
  }

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
      <ShowAllButton onShowAllProducts={handleShowAllProducts} />
      <Search searchQuery={searchQuery} onSearchInput={onSearchInput} />
      <CardList>
        {shownData.map(product => (
          <ProductCard
            name={product.name}
            description={product.description}
            image={product.image}
            id={product.id}
            key={product.id}
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
