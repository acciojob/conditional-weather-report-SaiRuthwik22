import React from 'react';

const WeatherDisplay = (props) => {
  const {temparature,Conditions} = props
  return(
      <div>
        <p style={{color :temparature>20 ? "red" : "blue"}}>Temparature :{temparature}</p>
      </div>
  )
}
