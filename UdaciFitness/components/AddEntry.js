import React, { Component } from 'react'
import { View } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'

class AddEntry extends Component {
  render() {
    return (
    	<View>
			{getMetricMetaInfo('bike').getIcon()}
    	</View>
    )
  }
}

export default AddEntry;