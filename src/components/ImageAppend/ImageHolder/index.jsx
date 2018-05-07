// @flow
import React from 'react'
import logo from './logo.svg'
import './styles.css'

const ImageHolder = ({ num }: { num: number }) => {
  function imagesMapper(value, index) {
    return <img src={logo} alt="react logo" className="Image" key={index} />
  }

  const images = Array.from({ length: num }, imagesMapper)

  return <div className="ImageHolder">{images}</div>
}

export default ImageHolder
