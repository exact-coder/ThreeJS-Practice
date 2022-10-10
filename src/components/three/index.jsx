import React from 'react';

const index = () => {
  return (
    <>

    <mesh>
        <sphereGeometry args={[1,32,32]}/>
        <meshStandardMaterial color="#ffffff"/>
    </mesh>

    <mesh>
        <planeGeometry args={[9,9]}/>
        <meshStandardMaterial color="#1ea3d8"/>
    </mesh>
    // Ambient Light
    <ambientLight args={["#ffffff",1]}/>
    </>
  )
}

export default index;

