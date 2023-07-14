import React from 'react'
import './Slider.css';


const RangeSlider = () => {
  return (
    <div className="container">
      <div className="form-group" style={{width:'100%',height:'auto'}}>
        <label for="rangeSlider">Technical</label>
        <input type="range" className="form-control-range" id="rangeSlider"  value={"70"}/><br />
        <label for="rangeSlider">Apptitude</label>
        <input type="range" className="form-control-range" id="rangeSlider" value={"30"}/><br />
        <label for="rangeSlider">Communication</label>
        <input type="range" className="form-control-range" id="rangeSlider" value={"50"}/>
      </div>
    </div>
  )
}

export default RangeSlider


