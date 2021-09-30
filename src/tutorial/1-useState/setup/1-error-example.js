import React, {useState} from 'react';



const ErrorExample = () => {
  const [text, setText] = useState('random title');
  const handleClick = () =>{
    if(text === 'random title'){

      setText('hello world');
      console.log('to hello')
    } else {
      setText('random title');
      console.log('to random')
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
};

export default ErrorExample;
