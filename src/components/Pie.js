// https://aboutreact.com/react-native-chart-kit/

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import {
  PieChart,
} from 'react-native-chart-kit';


const MyPieChart = () => {
  return (
    <>
      <Text style={styles.header}>Report</Text>
      <PieChart
        data={[
          {
            name: 'Income',
            population: 50000,
            color: 'green',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Expense',
            population: 30000,
            color: 'red',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,

        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

const Pie = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View>
            <MyPieChart />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Pie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
