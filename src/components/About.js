import React from 'react';
import profPic from '../images/kimber.jpg'

export default function About() {
    return (
<div className="row">
<div className="card m-auto w-50 col-sm-3">
  <div className="card-body">
    This is some text within a card body.
  </div>
</div>
<div className="card m-auto w-25 col-sm-3">
  <img src={profPic} alt="profile"/>
</div>
</div>
    )
}