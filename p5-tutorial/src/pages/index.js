import React from "react";
import P5 from "../components/p5";
import Layout from '../components/Layout'
import { Link } from "gatsby"

const IndexPage = () => (
    <div>
        <P5/>
        <Layout>
        <div className="max-w-lg">
          <p className="mt-16 mb-4 text-6xl">Hey!</p>
          <p className="text-4xl">I'm a Berlin based web developer with a passion for music.</p>
          <p className="text-4xl">I love creating stuff with
            <Link className="text-gray-600" to='/code'> code</Link>, making
            <Link className="text-gray-600" to='/code'> music</Link> and taking
            <Link className="text-gray-600" to='/code'> pics</Link>.
          </p>
          <p className="text-4xl">You can find me on twitter, soundcloud and instagram.</p>
        </div>
      </Layout>        
    </div>

  )

  export default IndexPage