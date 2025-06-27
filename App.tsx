import { View, Text } from 'react-native'
import React from 'react'
import MyTabs from './src/Routes/BottomTabs'
import Routes from './src/Routes/routes'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
     <Provider store={store}>
       <MyTabs/>
  </Provider>
 
  )
}

export default App