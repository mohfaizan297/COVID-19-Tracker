import React from 'react'
import './Header.css'

export default function Header({firstData}) {
  return (
    <div className='header-container'>
        <div className="box box-1">
            <h3>COUNTRY</h3>
            <h1 className='shadow'>INDIA</h1>
        </div>
        <div className="box box-2">
            <h3>RECOVERED</h3>
            <h1 className='shadow'>{firstData.recovered}</h1>
        </div>
        <div className="box box-3">
            <h3>CONFIRMED</h3>
            <h1 className='shadow'>{firstData.confirmed}</h1>
        </div>
        <div className="box box-4">
            <h3>DEATH</h3>
            <h1 className='shadow'>{firstData.deaths}</h1>
        </div>
        <div className="box box-5">
            <h3>ACTIVE</h3>
            <h1 className='shadow'>{firstData.active}</h1>
        </div>
        <div className="box box-6">
            <h3>DELTARECOVERED</h3>
            <h1 className='shadow'>{firstData.deltarecovered}</h1>
        </div>
    </div>
  )
}
