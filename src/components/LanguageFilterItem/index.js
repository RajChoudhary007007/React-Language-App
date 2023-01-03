// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachItem, isActive, updatedTab} = props
  const {id} = eachItem
  const activeClassName = isActive ? 'active-tab-btn' : ''

  const onClickTab = () => {
    updatedTab(id)
  }

  return (
    <>
      <li className="filter-item">
        <button
          className={`button ${activeClassName}`}
          type="button"
          onClick={onClickTab}
        >
          {eachItem.language}
        </button>
      </li>
    </>
  )
}

export default LanguageFilterItem
