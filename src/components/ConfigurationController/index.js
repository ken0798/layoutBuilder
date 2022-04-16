// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            contentStatus,
            leftNavStatus,
            rightNavStatus,
            onCheckStatus,
          } = value

          return (
            <div className="header">
              <div className="card">
                <h1>Layout</h1>
                <div>
                  <input
                    onChange={e =>
                      onCheckStatus(
                        e.target.checked,
                        leftNavStatus,
                        rightNavStatus,
                      )
                    }
                    id="content"
                    type="checkbox"
                    defaultChecked
                  />
                  <label htmlFor="content">Content</label>
                </div>
                <div>
                  <input
                    ked
                    onChange={e =>
                      onCheckStatus(
                        contentStatus,
                        e.target.checked,
                        rightNavStatus,
                      )
                    }
                    id="left_nav"
                    type="checkbox"
                    defaultChecked
                  />
                  <label htmlFor="left_nav">left NavBar</label>
                </div>
                <div>
                  <input
                    onChange={e =>
                      onCheckStatus(
                        contentStatus,
                        leftNavStatus,
                        e.target.checked,
                      )
                    }
                    id="right_nav"
                    type="checkbox"
                    defaultChecked
                  />
                  <label htmlFor="right_nav">right NavBar</label>
                </div>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
