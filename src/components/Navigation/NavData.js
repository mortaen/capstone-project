import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineForm } from 'react-icons/ai'

export const NavData = [
  {
    title: 'Home/Products',
    path: '/',
    icon: <AiOutlineHome />,
    id: 1,
  },
  {
    title: 'Add Product',
    path: '/product-form',
    icon: <AiOutlineForm />,
    id: 2,
  },
  {
    title: 'Recipes',
    path: '/recipes',
    icon: <AiOutlineForm />,
    id: 3,
  },
]
