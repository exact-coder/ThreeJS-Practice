import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';
import Three from './components/three';

function App() {
  return (
    <div className="App" >

      <Canvas id='three-canvas-container' shadows>
        <Suspense fallback={null}>
          <Three/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App;

// num-3 and len-12min
