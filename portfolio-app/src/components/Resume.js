import React, { useState } from 'react'
// import PDF from '../assets/Professional-resume. pdf'
const PDF ='https://docs.google.com/document/d/1bG9mDY7WSsQkJD-94X7HFfQz-7Qt1w2Z/edit?usp=sharing&ouid=111873614210822284542&rtpof=true&sd=true'
export default function Resume() {
//   const [showPDF, setShowPDF] = useState(false)

//   const handleClick = () => {
//     setShowPDF(!showPDF)
//   }

  return (
    <div className="m-5">
      <div className="pb-2">
        <h3>Resume</h3>
        <h6>
          Print or download my{' '}
          <a href= 'https://docs.google.com/document/d/1bG9mDY7WSsQkJD-94X7HFfQz-7Qt1w2Z/edit?usp=sharing&ouid=111873614210822284542&rtpof=true&sd=true'>
            resume
          </a>
        </h6>
      </div>
      {/* {showPDF ? ( */}
        <div>
          <ul>
            Front-end Proficiencies
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive deisgn</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <ul>
            Back-end Proficiencies
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      {/* ) : ( */}
        <div className="w-100">
          <object width="100%" height="600" data={PDF} type="application/pdf" />
        </div>
      {/* )} */}
    </div>
  )
}