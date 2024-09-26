import { Button, Text, View } from "react-native"
import LoginWithGoogle from '../components/LoginWithGoogle.jsx'

const Index = () => {
  return(
    
      <View style={{
      backgroundColor: 'pink',
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
      }}>
        <LoginWithGoogle />
      </View>
    
    
  )
}

export default Index