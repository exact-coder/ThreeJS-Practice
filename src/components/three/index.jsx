import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { angleToRadians } from '../../utils/angle';

const index = () => {

  const orbitControlsRef = useRef(null);

  useFrame((state) => {
    // console.log("Comes from Mouse",state.mouse);
    if (!!orbitControlsRef.current) {
      const {x,y} = state.mouse;
      console.log(-x * angleToRadians(90));
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y+1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  })

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  },[orbitControlsRef.current]);
  return (
    <>
    <PerspectiveCamera makeDefault position={[0,1,5]} />
    <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)}/>
    <mesh position={[0,1,0]}>
        <sphereGeometry args={[0.75,32,32]}/>
        <meshStandardMaterial color="#f4f"/>
    </mesh>

    <mesh rotation={[-(angleToRadians(90)),0,0]}>
        <planeGeometry args={[7,7]}/>
        <meshStandardMaterial color="#1ea3d8"/>
    </mesh>
    // Ambient Light
    <ambientLight args={["#ffffff",1]}/>
    </>
  )
}

export default index;

