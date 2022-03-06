
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Country, State, City } from 'country-state-city'
import { useDispatch } from 'react-redux'
import { createUser, listUsers } from '../../actions/userActions'

const AddUser = () => {
  // get selected value state
  const [option, setOption] = useState('admin')
  const [countryStates, setCountryStates] = useState([])
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [division, setDivision] = useState('')

  const dispatch = useDispatch()

  const states = (countryId) =>
    State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }))

  useEffect(() => {
    if (option === 'employee') {
      setCountryStates(states('BD'))
    }
  }, [option])

  console.log(option)

  // console.log(updatedStates('BD'))

  const handleChange = (value) => {
    setOption(value)
  }

  const handleDivisionChange = (value) => {
    console.log(value)
    setDivision(value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createUser({
        first_name: firstname,
        last_name: lastname,
        user_type: option,
        division: division,
        district: division,
      })
    )

    // if (option === 'admin') {
    //   dispatch(listUsers('admin', 1, 5))
    // } else if (option === 'employee') {
    //   dispatch(listUsers('employee', 1, 5))
    // }
  }
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3'>
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Firstname'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Lastname'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>User Type</Form.Label>
          <Form.Select
            onChange={(event) => handleChange(event.target.value)}
            value={option}
          >
            <option value='admin'>Admin</option>
            <option value='employee'>Employee</option>
          </Form.Select>
        </Form.Group>

        {option === 'employee' && (
          <Form.Group className='mb-3'>
            <Form.Label>Division</Form.Label>
            <Form.Select
              onChange={(event) => handleDivisionChange(event.target.value)}
              value={division}
            >
              {countryStates.map((countryState) => (
                <option value={countryState.label} key={countryState.isoCode}>
                  {countryState.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        )}

        <Button type='submit' variant='primary'>
          {' '}
          Add User
        </Button>
      </Form>
    </div>
  )
}

export default AddUser
