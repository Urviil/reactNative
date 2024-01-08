import { View, Text } from 'react-native'
import React from 'react'

const Toggler = () => {
    const [show, setShow] = useState(true)
    return (
      <View>
        {
          show ? <Text style={styles.mainText}>Show/Hide component</Text> : null
        }
        <Button title="Toggler Button" onPress={() => setShow(!show)} />
  
      </View>
    )
  
}
export default Toggler;