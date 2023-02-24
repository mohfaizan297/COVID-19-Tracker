import React from 'react'
import './StateWiseData.css'

export default function StateWiseData({data, input}) {
  return (
    <div>
        <div className="table-responsive">
            <table className="table">
                <thead className='thead-dark'>   
                    <tr>
                        <th>States</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>LastUpdate</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, idx) => {
                        if(item.state.includes(input))
                        return(
                            <tr key={idx}>
                                <th>{item.state}</th>
                                <td>{item.confirmed}</td>
                                <td>{item.active}</td>
                                <td>{item.recovered}</td>
                                <td>{item.deaths}</td>
                                <td>{item.lastupdatedtime}</td>
                            </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
