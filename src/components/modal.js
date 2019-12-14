import React, {useState} from 'react';
import {Modal, Button, Form } from 'react-bootstrap';

function MyModal (props) {
    const [disabled, setDisabled] = useState(false);
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
      document.getElementById('copy').innerHTML = "Copy URL";
      setShow(false);
      setDisabled(false);
    }
    
    const handleShow = () => setShow(true);

    //закрытие формы если нажали ESC
    function handle (event){
      if (event.keyCode === 27) {
        handleClose();
      }
    }

    function copy_url(event){
      document.getElementById('result_link').select();
      try { 
          document.execCommand('copy'); 
      } catch(err) { 
          console.log('Can`t copy'); 
      } 
      event.currentTarget.innerHTML="Copied";
      event.currentTarget.style.cursor="not-allowed";
      setDisabled(true);
    }

    return (
      <>
        <Modal show={show} onHide={handleClose} animation={false} className="pr-2 pl-2" onKeyDown={handle}>
          <Modal.Header closeButton>
            <Modal.Title>Your Search Query</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Copy, save or open the search string in Google and find the right candidates</Form.Label>
            <Form.Control as="input" value = {props.link} readOnly={true} id="result_link"></Form.Control>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="outline-secondary" onClick={copy_url} disabled={disabled} className="btn btn-res" id='copy'>
              Copy URL
            </Button>
            <Button variant="success" onClick={handleClose} className="btn btn-res" target="_blank" id="search" href={props.link}>
              Open in Google
            </Button>
          </Modal.Footer>
        </Modal>
        <Button type="submit" variant="secondary" size="lg" block onClick={handleShow}>Find the right people on {props.socName}</Button>
      </>
    );
  }
  
  export {MyModal};