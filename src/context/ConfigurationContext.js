import React from 'react'

const ConfigurationContext = React.createContext({
  contentStatus: false,
  leftNavStatus: false,
  rightNavStatus: false,
  onCheckStatus: () => {},
})

export default ConfigurationContext
