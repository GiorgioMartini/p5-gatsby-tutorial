import React, { useState, useEffect } from "react";
import Dancinglines from '../components/sketches/dancinglines'
import Layout from '../components/Layout'
import { Link } from "gatsby"

// const sketches = [
//   {
//     title: 'one',
//     thumbnail: 'https://i.imgur.com/Ll0bZIp.png',
//     url: 'https://raw.githubusercontent.com/GiorgioMartini/JamSesssion/master/public/javascripts/modules/addNewFieldOnClick.js?token=ABAJMKMX3LYEQP3JGYYCK5K7P5V7I',
//   },
//   {
//     title: 'two',
//     thumbnail: 'https://i.imgur.com/Ll0bZIp.png',
//     url: 'https://raw.githubusercontent.com/GiorgioMartini/JamSesssion/master/public/javascripts/modules/addNewFieldOnClick.js?token=ABAJMKMX3LYEQP3JGYYCK5K7P5V7I'
//   }
// ]

const CodePage = () => {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible);

  return (
  <div className="bg-black">
    <Layout>
      <button onClick={toggleVisibility}>Show</button>
      {visible && <Dancinglines />}

      <div className="max-w-lg">
        {/* {sketches.map((pen, i) => (
          <div key={i}>
            <img className="" src={pen.thumbnail} alt="" />
          </div>
        ))} */}
      </div>
    </Layout>
  </div>
  )
}

export default CodePage
