import { useState } from "react"
import styled  from "styled-components"
import video from "./video.mp4"

const Wrapper = styled.div`
  z-index: 10;
  position: relative;

  .fake{
    z-index: 10;
    display: inline-block;
    width: 100%;
    height: 100vh; 
  }

  .small{
    z-index: 10;
    clip-path : circle(1.5% at 50% 50%); 
    transition: 0.5s;
  }

  .small:hover {
    z-index: 10;
    clip-path : circle(6% at 50% 50%); 
    transition: 0.5s;
  }

  .big {
    z-index: 10;
    clip-path : circle(100% at 50% 50%); 
    transition: 0.5s;
  }

  /* span tag 속성*/
  .visible {
    position: fixed;
    top: 49%;
    left: 52%;
    z-index: 20;
    font-weight: bold;
    color: inherit;
    letter-spacing: 2px;
  }

  .visible:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: black;
    transition: 0.5s;
  }
  /* .visible:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: 0.5s;
  } */
  .visible:hover:after {
    width: 100%;
  }

  /* .visible:hover:before {
    width: 100%;
  } */

`
function App() {
  const [ active, setActive ] = useState(false);
  

  const activeHandler = (event) => {
    setActive(!active);
  }

  return (
    <div className="App">
      <Wrapper>
        <span className={active ? "" : "visible"} onClick={activeHandler}>{active ? "" : "WATCH THE VIDEO"}</span>
        <div className={active ? "big fake" : "small fake"} onClick={activeHandler}>
          <video muted autoPlay loop className="video"> 
            <source src={video}/>
          </video>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
