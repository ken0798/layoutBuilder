// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

function LeftSection() {
  return (
    <div className="left_body menu_bg">
      <h1>Left Navbar Menu</h1>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </div>
  )
}

function MiddleSection() {
  return (
    <div className="middle_body">
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
        consectetur adipiscing. Amet nulla facilisi morbi tempus iaculis urna.
        Aliquet porttitor lacus luctus accumsan tortor. Orci sagittis eu
        volutpat odio facilisis mauris sit amet massa.
      </p>
    </div>
  )
}

function RightSection() {
  return (
    <div className="right_body menu_bg">
      <h1>Right Navbar</h1>
      <div>
        <p>Ad 1</p>
      </div>
      <div>
        <p>Ad 2</p>
      </div>
    </div>
  )
}

function responsiveAction(value) {
  const result =
    value.rightNavStatus && value.leftNavStatus === true ? 'in_between' : ''
  return result
}

function Body() {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {rightNavStatus, leftNavStatus, contentStatus} = value
        const responsiveClass = responsiveAction(value)
        console.log(responsiveClass)
        return (
          <div className={`body_page ${responsiveClass}`}>
            {leftNavStatus && <LeftSection />}
            {contentStatus && <MiddleSection />}
            {rightNavStatus && <RightSection />}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
