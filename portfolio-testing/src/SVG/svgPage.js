import React from 'react'
import Section from './Section'
import "./svgPage.css"

export default function SvgPage() {
  return (<div>
    <div className='header'>
      <h1>Welcome to the site!</h1>
    </div>
    <div className='spacer layer3'/>
    <Section color="red"/>
    <div className='spacer layer1'/>
    <Section color="yellow"/>
    <div className='spacer layer2'/>
    <Section color="blue"/>
    <div className='spacer layer4'/>
    <div className='footer'>
      <footer>Footer info</footer>
    </div>
    </div>
  )
}
