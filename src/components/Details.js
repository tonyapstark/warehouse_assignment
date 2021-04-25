import React from 'react'
import MOCK_DATA from './warehouses.json'


export const Details = () => {
    return(
        <ul>
        <li>{MOCK_DATA[0].name}</li>
        <li>{MOCK_DATA[0].city}</li>
        <li>{MOCK_DATA[0].cluster}</li>
        <li>{MOCK_DATA[0].id}</li>
        </ul>
    )
}