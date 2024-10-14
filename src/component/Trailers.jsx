import React, { useEffect, useState } from 'react'
import "../assets/style.css/style.css"
import axios from 'axios'
const Trailers = () => {
  // const [Trailer, setTraildata] = useState([])
  // const ApiKey = ``
  // const ApiUrl = ""
  // useEffect(() => {
  //   axios.get(ApiUrl)
  //   .then((res)=>{
  //     setTraildata(res.data.results);
  //     console.log(res.data.results);
  //   })
  //   .catch((err)=>{
  //     console.log("pls check internet connection",err);
  //   })
  // }, [ApiUrl]);
  return (
    <div>
      <div className="coming-soon">
        <h1> Trailers Coming Soon</h1>
        {/* {Trailer.map(Trailers =>(
            <h3>{Trailers.movies}</h3>
        ))} */}
       
      </div>
    </div>
  )
}

export default Trailers