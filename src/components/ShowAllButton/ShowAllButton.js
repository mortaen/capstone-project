import { IconContext } from 'react-icons'
import { MdAutorenew } from 'react-icons/md'

export default function ShowAllButton({ onShowAllProducts }) {
  //   return <Button onClick={onShowAllProducts}>show all</Button>
  return (
    <IconContext.Provider value={{ color: '#fad0c4', size: '2rem' }}>
      <MdAutorenew onClick={onShowAllProducts} />
    </IconContext.Provider>
  )
}
