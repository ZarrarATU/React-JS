import React from 'react'
import { useParams } from 'react-router-dom'

function About() {

let {vara} = useParams()

  return (
    <div>this is ABOUT US PAGE {vara}</div>
  )
}

export default About