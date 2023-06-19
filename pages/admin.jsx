import { useState } from 'react';
import { getTest } from '../api/db';


export default function Admin({ test }) {
  let [name, setName] = useState('');
  let [dataElements, setDataElements] = useState([]);
  
  const handleAddElement = () => {
    setDataElements((prevDataElements) => [
      ...prevDataElements,
      { id: Date.now(), name: '' },
    ]);
  };

  
const handleElementChange = (id, value) => {
  setDataElements((prevDataElements) => {
    const updatedDataElements = prevDataElements.map((element) => {
      if (element.id === id) {
        return { ...element, name: value };
      }
      return element;
    });
    return updatedDataElements;
  });
};

const handleSaveElements = async () => {
  try {
    const response = await fetch('../api/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataElements),
    });
    if (response.ok) {
      console.log('Elements saved successfully!');
      // Perform any additional actions upon successful submission
    } else {
      console.error('Elements submission failed!');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('../api/db', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        console.log('Data sent successfully!');
        // Perform any additional actions upon successful submission
      } else {
        console.error('Data submission failed!');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    setName(name="")
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`../api/db?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Element deleted successfully!');
        // Perform any additional actions upon successful deletion
      } else {
        console.error('Element deletion failed!');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='container mx-auto flex'>
      <div className=' w-[30%]'>
        <form className='flex column' onSubmit={handleSubmit}>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='ml-3' type='submit'>Submit</button>
        </form>
        <button onClick={handleAddElement}>Add</button>
      </div>
      <div className=' w-[70%] flex flex-col text-white'>
          

        
          {/* {test.map((test) => (
            <div className='container' key={test.id}>
              <span className='text-white animated-underline pb-2 mb-4'>
                {test.name}
              </span>
              <button
                className='ml-2'
                onClick={() => handleDelete(test.id)}
              >
                Delete
              </button>
            </div>
          ))} */}

          {test.map((element) => (
            <div className='container text-center' key={element.id}>
              <input
                type='text'
                value={element.name}
                onChange={(e) => handleElementChange(element.id, e.target.value)}
              />
              <button
                className='ml-2'
                onClick={() => handleDelete(element.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <button onClick={handleSaveElements}>Save</button>
          

      </div>
    </div>
  );
}


export async function getServerSideProps() {
  const test = await getTest();
  return {
    props: {
      test,
    },
  };
}
