import React from 'react'
import { Code, CodeSimple } from "@phosphor-icons/react";

const LandingPage = () => {
  return (
    <>
      <h1>{<CodeSimple size={32} />} Hello World {<Code size={32} />}</h1>
    </>
  )
}

export default LandingPage
