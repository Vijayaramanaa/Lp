import React from 'react';
import Down from "../../assets/images/download.png"

function Download() {
  return (
    <div style={{maxWidth:"1000px",height:"100vh",display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",margin:"auto"}}>
        <img src={Down} style={{marginTop:"60px",width:"80vw",height:"80vh"}} alt='pic'/>
    </div>
  )
}

export default Download