import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineForm } from 'react-icons/ai'
import { BiFoodMenu } from 'react-icons/bi'

export const NavData = [
  {
    title: 'Products',
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
    icon: <BiFoodMenu />,
    id: 3,
  },
]
