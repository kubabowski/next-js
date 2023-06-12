import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxHeight: '80%',
    background: 'rgba(0, 0, 0, 0.92)',
    color: 'white',
    fontWeight: '200',
    overflowY: 'show',
    paddingBottom: '3rem',

  },
  overlay: {
    backgroundColor: 'rgba( 0 ,0 ,0 , 0.6 )',
    
  },
  
};

const Modalcomponent = (props) => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className= {`text-white animated-underline ${props.customClass}`} onClick={openModal}>{props.label}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        

  
      >
  
        <button className='sticky top-[1%] left-[100%]' onClick={closeModal}><svg width="40" height="40" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="white" strokeWidth="1" /></svg></button>
        {props.text && (
          <div className='text-center' dangerouslySetInnerHTML={{ __html: props.text }} />
        )}
        
      </Modal>
    </div>
  );
}

export default Modalcomponent