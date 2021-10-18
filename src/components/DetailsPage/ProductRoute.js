import { useParams } from 'react-router-dom'
import DetailsPage from './DetailsPage'

function ProductRoute({ productData }) {
  const { id } = useParams()

  const productInfo = productData.find(product => product.id === id)

  return productInfo ? (
    <DetailsPage
      name={productInfo.name}
      image={productInfo.image}
      brand={productInfo.brand}
      description={productInfo.description}
      ingredients={productInfo.ingredients}
      nutritionFacts={productInfo.nutritionFacts}
      stores={productInfo.stores}
      categories={productInfo.categories}
      price={productInfo.price}
    />
  ) : (
    <div>PRODUCT NOT FOUND: {id}</div>
  )
}

export default ProductRoute
