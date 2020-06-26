import React from 'react'

const GalacticContext = React.createContext({
  getData: () => { },
  data: [],
  category: '',
  changeRenderNumber: () => { },
})

export default GalacticContext
