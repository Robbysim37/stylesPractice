import React from 'react'
import "./Hexagon.css"

export default function Hexagon(props) {
  return (
    <div className={`hexagon ${props.name}`}></div>
  )
}
