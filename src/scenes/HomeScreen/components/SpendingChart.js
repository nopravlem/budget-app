import { PieChart } from 'react-native-chart-kit'
import { Dimensions, View } from 'react-native'
import React from 'react';
import { categoryDivideData } from './../../../services/ExpensesDB'

const pieChartData = [
  { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Beijing', population: 527612, color: 'black', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'New York', population: 8538000, color: '#eee', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)' },
  { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
]

export class SpendingChart extends React.Component {
  render() {
    return (
      <View>
        <PieChart
          data={pieChartData}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute={false}
        />


        <View>{console.log(categoryDivideData)}</View>
        </View>
    )
  }
}
