import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import ConfigurationContext from './context/ConfigurationContext'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    contentStatus: true,
    leftNavStatus: true,
    rightNavStatus: true,
  }

  onCheckStatus = (v1 = true, v2 = true, v3 = true) =>
    this.setState(prevState => ({
      ...prevState,
      contentStatus: v1,
      leftNavStatus: v2,
      rightNavStatus: v3,
    }))

  render() {
    // const {contentStatus, leftNavStatus, rightNavStatus} = this.state
    // console.log(contentStatus, leftNavStatus, rightNavStatus)
    return (
      <div>
        <ConfigurationContext.Provider
          value={{...this.state, onCheckStatus: this.onCheckStatus}}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
