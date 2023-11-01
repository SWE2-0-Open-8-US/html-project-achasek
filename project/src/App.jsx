import { useState } from 'react'
import './App.css'

import Button from './components/Button/Button';

import Splash from './components/Splash/Splash';

function App() {
  const [count, setCount] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>

      {showSplash ? <Splash showSplash={showSplash} setShowSplash={setShowSplash} /> : <h1>Chases Page</h1>}
      <div className="card">
        <Button handleClick={() => setCount((count) => count + 1)} text={`count is ${count}`} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam et officiis. Reprehenderit sit possimus aliquam, esse molestias necessitatibus maiores aperiam voluptate debitis officiis provident dignissimos. Odit deleniti blanditiis ea.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis modi id qui, velit beatae veniam a fugiat sunt quasi dicta illo eaque animi commodi, ratione asperiores laboriosam. Eligendi, illum similique?
      </p>
    </>
  )
}

export default App
