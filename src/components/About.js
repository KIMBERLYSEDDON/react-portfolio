import React from 'react';
import profPic from '../images/kimber.jpg'

export default function About() {
    return (
<div className="row">
<div className="card m-auto w-50 col-sm-3">
  <div className="card-body">
   My journey in tech began recently. I'm eager to learn more and more.
  </div>
</div>
<div className="card m-auto w-25 col-sm-3">
  <img src={profPic} alt="profile"/>
</div>
</div>
    )
}