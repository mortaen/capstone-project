import { debounce } from 'lodash'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineFileAdd, AiOutlineHome } from 'react-icons/ai'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import useCategories from '../../hooks/useCategories'
import useSearch from '../../hooks/useSearch'
import CustomLink from '../CustomLink/CustomLink'
import Filter from '../Filter/Filter'
import ProductCard from '../ProductCard/ProductCard'
import Search from '../Search/Search'
import ShowAllButton from '../ShowAllButton/ShowAllButton'

function Products({ onAddRating, ratings, productData }) {
  const history = useHistory()

  const {
    productCategories,
    activeCategory,
    setActiveCategory,
    handleCategoryClick,
  } = useCategories()

  const [showFilters, setShowFilters] = useState(false)

  function showFilter() {
    setShowFilters(!showFilters)
  }

  function handleShowAllProducts() {
    history.push('/')
    setActiveCategory('')
    handleSearchInput('')
  }

  const { searchQuery, handleSearchInput, searchResults } = useSearch({
    productData,
  })

  let shownData
  if (activeCategory !== '') {
    shownData = searchResults.filter(product =>
      product.categories.includes(activeCategory)
    )
  } else {
    shownData = searchResults
  }

  function handleSubmit(event) {
    history.push(`?search=${searchQuery}&category=${activeCategory}`)
    event.preventDefault()
  }

  function updateUrl() {
    if (searchQuery === '') {
      history.push('/')
    } else {
      history.push(`?search=${searchQuery}&category=${activeCategory}`)
    }
  }

  // eslint-disable-next-line
  const delayedQuery = useCallback(debounce(updateUrl, 1000), [searchQuery])

  useEffect(() => {
    delayedQuery()

    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel
  }, [searchQuery, delayedQuery])

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
        <IconContext.Provider value={{ color: '#fad0c4', size: '2rem' }}>
          <MdOutlineFilterAlt aria-label="show filters" onClick={showFilter} />
        </IconContext.Provider>
        <ShowAllButton onShowAllProducts={handleShowAllProducts} />
      </Section>
      <Filter
        onCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
        productCategories={productCategories}
        showFilters={showFilters}
      />
      <ShowAllButton onShowAllProducts={handleShowAllProducts} />
      <Search
        searchQuery={searchQuery}
        onSearchInput={handleSearchInput}
        onSubmit={handleSubmit}
      />
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
