import React from "react";
import P5 from "../components/p5";
import Layout from '../components/Layout'
import { Link } from "gatsby"

const IndexPage = () => (
    <div className="">
        <P5/>
        <Layout>
        <div className="max-w-lg">
          <p className="mt-16 mb-4 text-6xl">Hey!</p>
          <p className="text-4xl">I'm a Berlin based web developer with a passion for music.</p>
          <p className="text-4xl">I love creating stuff with
            <Link className="gioGreen" to='/code'> code</Link>, making
            <Link className="gioGreen" to='/code'> music</Link> and taking
            <Link className="gioGreen" to='/code'> pics</Link>.
          </p>
          <p className="text-4xl">You can find me on
          <Link className="gioGreen" to='/code'> twitter</Link>, 
          <Link className="gioGreen" to='/code'> soundcloud</Link> and
          <Link className="gioGreen" to='/code'> instagram</Link>.</p>
        </div>
      </Layout>        
    </div>

  )

  export default IndexPage
