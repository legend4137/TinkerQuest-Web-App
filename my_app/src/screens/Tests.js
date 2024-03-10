import React from 'react'
import Navbar from '../components/Navbar'
import { Component } from "react";
import ReactSearchBox from "react-search-box";
let data = [
  {
    key: "john",
    value: "John Doe",
  },
  {
    key: "jane",
    value: "Jane Doe",
  },
  {
    key: "mary",
    value: "Mary Phillips",
  },
  {
    key: "robert",
    value: "Robert",
  },
  {
    key: "karius",
    value: "Karius",
  },
];
export default function Tests() {


  return (
    <div>
    <Navbar/>
    <div>Tests</div>
    <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        data={data}
        callback={(record) => console.log(record)}
      />
    </div>
  
  )
}



