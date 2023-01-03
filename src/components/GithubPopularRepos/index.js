import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    filterItems: [],
    isActive: true,
    activeId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getFilterItems()
  }

  getFilterItems = async () => {
    const {activeId} = this.state

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeId}`

    const response = await fetch(apiUrl)
    const data = await response.json()
    const popularRepos = data.popular_repos
    console.log(popularRepos)
    const updatedData = popularRepos.map(eachItem => ({
      avatarUrl: eachItem.avatar_url,
      forksCount: eachItem.forks_count,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
    }))
    this.setState({filterItems: updatedData, isActive: false})
  }

  updatedTab = id => {
    this.setState({activeId: id}, this.getFilterItems)
  }

  getStatus = () => {
    const {filterItems} = this.state

    return (
      <>
        {filterItems.map(eachItem => (
          <RepositoryItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {activeId, isActive} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">popular</h1>
        <div className="home-container">
          <ul className="language-container">
            {languageFiltersData.map(eachItem => (
              <LanguageFilterItem
                key={eachItem.id}
                eachItem={eachItem}
                isActive={eachItem.id === activeId}
                updatedTab={this.updatedTab}
              />
            ))}
          </ul>

          <ul className="repository-item">
            {isActive ? this.renderLoader() : this.getStatus()}
          </ul>
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
