import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import * as THREE from "three";
import { angleToRadians } from '../../utils/angle';

const index = () => {

  const orbitControlsRef = useRef(null);
  const ballRef = useRef(null);
  

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

  useEffect(() => {
    if(!!ballRef.current){
      const timeline = gsap.timeline({paused:true});

      timeline.to(ballRef.current.position, {
        x:1,
        duration:2,
        ease: "power3.out"
      });

      timeline.to(ballRef.current.position, {
        y: 0.5,
        duration: 2,
        ease: "bounce.out"
      }, "<");
      timeline.play();
    }
  }, [ballRef.current])
  

  return (
    <>
    <PerspectiveCamera makeDefault position={[0,1,5]} />
    <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)}/>
    <mesh position={[-2,2.5,0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5,32,32]}/>
        <meshStandardMaterial color="#ffffff" metalness={0.7} roughness={0.2}/>
    </mesh>

    <mesh rotation={[-(angleToRadians(90)),0,0]} receiveShadow>
        <planeGeometry args={[20,20]}/>
        <meshStandardMaterial color="#1ea3d8"/>
    </mesh>
    // Ambient Light
    <ambientLight args={["#ffffff",0.25]}/>

    <spotLight args={["#ffffff",1.5,7, angleToRadians(45),0.4]} position={[-3,1,0]} castShadow/>

    <Environment background>
      <mesh>
        <sphereGeometry args={[50,100,100]}/>
        <meshBasicMaterial color={"#2266cc"} side={THREE.BackSide}/>
      </mesh>
    </Environment>
    </>
  )
}

export default index;



