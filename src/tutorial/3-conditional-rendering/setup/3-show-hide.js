import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={()=> setShow(!show)}>
        show/Hide
      </button>
      {show && <Item />}
    </>
  )
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const checkSize = () =>{
    setSize(window.innerWidth);
  }

  const checkHeight = () => {
    setHeight(window.innerHeight);
  }

  useEffect(()=> {
    window.addEventListener('resize', checkSize);
    window.addEventListener('resize', checkHeight);
    return ()=> {
      window.removeEventListener('resize', checkSize);
      window.removeEventListener('resize', checkHeight);
    }
  }, [])

  return (
    <div style={{marginTop: '2rem'}}>
      <h1>window Size</h1>
      <h2>Width: {size} px</h2>
      <h2>height: {height} px</h2>
    </div>
  )
}

export default ShowHide;
