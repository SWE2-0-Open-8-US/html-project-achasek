// import { useState } from 'react';
import './App.css'

// import Button from './components/Button/Button';

import Splash from './components/Splash/Splash';
import Nav from './components/Nav/Nav';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Splash /> 
      {/* <div className="card">
        <Button handleClick={() => setCount((count) => count + 1)} text={`count is ${count}`} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <div className='aboutContainer'>
        <div className="aboutContent">
          <img id="profile" src="/profile.png" alt="profile picture"/>
          <h1>About Chase</h1>
          <h3 className='aboutText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam et officiis. Reprehenderit sit possimus aliquam, esse molestias necessitatibus maiores aperiam voluptate debitis officiis provident dignissimos. Odit deleniti blanditiis ea.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis modi id qui, velit beatae veniam a fugiat sunt quasi dicta illo eaque animi commodi, ratione asperiores laboriosam. Eligendi, illum similique?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus veniam impedit at ipsa, natus voluptatem repudiandae corrupti eveniet autem laboriosam suscipit, labore veritatis debitis beatae cumque, unde in eligendi quidem!
          </h3>
        </div>
      </div>
    </>
  )
}

export default App
