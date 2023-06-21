import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { List } from './ListComponent'



const App = () => {



  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {

    const resp = await fetch("https://api.usepromo.io/api/discover/list?pageNumber=1&recordPerPage=10&orderBy=id&orderDir=desc");
    const data = await resp.json();
    setData(data.result.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <List data={data} />
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({})