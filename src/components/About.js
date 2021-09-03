import React from 'react';
import profPic from '../images/ProfPic.jpg'

export default function About() {
    return (
<div className="row p-4">
<div className="card m-auto w-50 col-sm-3">
  <div className="card-body">
   <h5 style={{color: "#89388C"}}>"avid traveller, problem solver, constant thinker...." </h5>
   Hello! Welcome to my portfolio. I am a MERN full stack software engineer, former bartender and hospitality manager. I recently earned a certificate in coding from the University of Pennsylvania. I am absolutely thrilled about learning as much as possible about web development. My experience in an immersive coding program has taught me so much and I am eager to enter the job field. Until I find the perfect fit I am continuing my learning with AWS, Phython, and Angular.

  </div>
</div>
<div className="card m-auto w-25 col-sm-3" style={{borderRadius: "50px", backgroundColor: "#89388C"}}>
  <img src={profPic} alt="profile" style={{borderRadius: "50px"}}/>
</div>
</div>
    )
}