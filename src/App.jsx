import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';
import Three from './components/three'

function App() {
  return (
    <div className="App">
      Wellcome to Three JS World
      <Canvas id='three-canvas-container'>
        <Suspense fallback={null}>
          <Three/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App;
