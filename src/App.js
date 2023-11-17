import {Component} from 'react'
import Language from './components/Language'
import Tabs from './components/Tabs'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeId: languageGreetingsList[0].id}

  clickTabItem = tabValue => {
    this.setState({activeId: tabValue})
  }

  getFilteredItems = () => {
    const {activeId} = this.state
    const filteredItems = languageGreetingsList.filter(
      eachDetails => eachDetails.id === activeId,
    )
    return filteredItems
  }

  render() {
    const {activeId} = this.state
    const filteredItems = this.getFilteredItems()

    return (
      <div className="mainContainer">
        <h1 className="head">Multilingual Greetings</h1>
        <ul className="options">
          {languageGreetingsList.map(tabDetails => (
            <Tabs
              key={tabDetails.id}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeId === tabDetails.id}
            />
          ))}
        </ul>

        {filteredItems.map(eachItem => (
          <Language key={eachItem.id} languageDetails={eachItem} />
        ))}
      </div>
    )
  }
}

export default App
