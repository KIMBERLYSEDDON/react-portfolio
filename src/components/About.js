import React from 'react';
import profPic from '../images/kimber.jpg'

export default function About() {
    return (
<div className="row p-4">
<div className="card m-auto w-50 col-sm-3">
  <div className="card-body">
   "avid traveller, problem solver, constant thinker...."
   I'm new to the tech world but loving it so far. Stay tuned for more!
  </div>
</div>
<div className="card m-auto w-25 col-sm-3" style={{borderRadius: "50px", backgroundColor: "#89388C"}}>
  <img src={profPic} alt="profile" style={{borderRadius: "50px"}}/>
</div>
</div>
    )
}