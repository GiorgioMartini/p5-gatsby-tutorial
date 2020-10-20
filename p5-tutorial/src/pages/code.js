import React, { useState, useEffect } from "react";
import Dancinglines from '../components/sketches/dancinglines'
import Layout from '../components/Layout'
import Modal from '../components/modal'
const sketches = [
  {
    title: 'one',
    thumbnail: 'https://i.imgur.com/Ll0bZIp.png',
    sketch: <Dancinglines />,
  },
  {
    title: 'two',
    thumbnail: 'https://i.imgur.com/Ll0bZIp.png',
    sketch: <Dancinglines />
  }
]

const CodePage = () => {
  const [visible, setVisible] = useState(false)
  const [currentSketch, setCurrentSketch] = useState(null)
  const toggleVisibility = () => setVisible(!visible);

  const showSketch = (component) => {
    setCurrentSketch(component)
    console.log(component);
    toggleVisibility()
  }

  return (
  <div className="bg-gray-400">
    <Layout>

      <Modal open={visible} toggle={toggleVisibility}>
        {currentSketch}
      </Modal>

      {/* <button onClick={toggleVisibility}>Show</button> */}
      {/* {visible && <Dancinglines />} */}

      <div className="max-w-lg">
        {sketches.map((pen, i) => (
          <div className="m-8" key={i}>
            <img onClick={() => showSketch(pen.sketch)} className="" src={pen.thumbnail} alt="" />
          </div>
        ))}
      </div>
    </Layout>
  </div>
  )
}

export default CodePage
