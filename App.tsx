import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Routes from './src/Routes/routes'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import MyTabs from './src/Routes/BottomTabs'
import { Colors } from './src/helper/themeHelper'

const App = () => {


  return (

     <Provider store={store}>
            <StatusBar backgroundColor={Colors.Primary} barStyle="light-content" />

      <MyTabs/>
  </Provider>
 
  )
}

export default App