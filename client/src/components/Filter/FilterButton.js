import { IconContext } from 'react-icons/lib'
import { FiFilter } from 'react-icons/fi'

function FilterButton({ showFilter }) {
  return (
    <button aria-label="show filters" onClick={showFilter}>
      <IconContext.Provider value={{ color: '#1f2933', size: '20px' }}>
        <FiFilter />{' '}
      </IconContext.Provider>
    </button>
  )
}

export default FilterButton
