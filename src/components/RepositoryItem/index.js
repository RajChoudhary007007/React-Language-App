// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachItem} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = eachItem

  return (
    <li className="repository-item">
      <div className="repository-container">
        <img className="image" alt="" src={avatarUrl} />
        <h1 className="heading">{name}</h1>
        <p className="description">{forksCount}</p>
        <p className="description">{issuesCount}</p>
        <p className="description">{starsCount}</p>
      </div>
    </li>
  )
}
export default RepositoryItem
