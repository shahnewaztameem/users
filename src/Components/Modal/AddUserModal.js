import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import AddUser from '../AddUserForm/AddUser'

const AddUserModal = (props) => {
  return (
    <div>
      <Modal show={props.isOpen}>
        <Modal.Header>
          <Modal.Title>Add a new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddUser />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={props.toggle}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddUserModal
