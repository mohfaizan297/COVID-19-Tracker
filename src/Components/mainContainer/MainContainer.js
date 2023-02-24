import React, { useEffect, useState } from 'react'
import Header from './Header/Header';
import './MainContainer.css'
import SearchBar from './seach Bar/SearchBar';
import StateWiseData from './stateWiseData/StateWiseData';

export default function MainContainer() {
    const [data, setData] = useState([])
    const [firstData, setFirstData] = useState([])
    const [input, setInput] = useState('')
    
    async function getStateData(){
        const res = await fetch('https://data.covid19india.org/data.json')
        const actualData = await res.json();
        setData(actualData.statewise)
        setFirstData(actualData.statewise[0])
        
    }
    useEffect(() => {
        getStateData();
    }, [])

    function handleSearchText(text){
        setInput(text)
        console.log(input)
    }

  return (
    <div className='main-container'>
        <h1 className='covid-heading'>INDIA COVID-19 TRACKER</h1>
        <Header firstData={firstData}/>
        <SearchBar handleSearchText={handleSearchText}/>
        <StateWiseData input={input} data={data}/>
        
    </div>
  )
}
