import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {

    setPeople((oldPeople) => {
      let deletePeople = oldPeople.filter((person)=> person.id !== id)
      return deletePeople;
    });
  };
  
  return (
  <>
    {
      people.map((person)=>{
        const {id, name} = person;
        return(
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={()=> removeItem(id)}>remove</button>
          </div>
        )
      })
    }
    <button className="btn" onClick={() => setPeople([])}>
      clear item
    </button>
  </>
  );
};

export default UseStateArray;