import styled from 'styled-components/macro'
import ProductCard from '../ProductCard/ProductCard'

function ProductCardList({ productData }) {
  return (
    <CardList role="section">
      {productData.map(product => (
        <ProductCard
          name={product.name}
          description={product.description}
          image={product.image}
          key={product.name}
        />
      ))}
    </CardList>
  )
}

const CardList = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
`

export default ProductCardList
