import { useDispatch, useSelector } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Button, Container, Row, Col } from 'react-bootstrap'
import 'react-tabs/style/react-tabs.css'
import './CustomTabs.css'
import { useEffect, useState } from 'react'
import AddUserModal from '../Modal/AddUserModal'
import { listUsers } from '../../actions/userActions'
import AdminUserList from '../AdminUserList/AdminUserList'

const CustomTabs = () => {
  const [showModal, setShowModal] = useState(false)
  const [tabIndex, setTabIndex] = useState(0)
  const toggleModal = () => {
    setShowModal(!showModal)
  }
  const dispatch = useDispatch()
  const allUsers = useSelector((state) => state.userList)
  
  const userCreate = useSelector(state => state.userCreate)

  const {loading: userCreateLoading, success: userCreateSuccess, error: userCreateError} = userCreate

  const { loading, error, users } = allUsers
  
  
  useEffect(() => {
    if (tabIndex === 0) {
      dispatch(listUsers('admin', 1, 5))
    } else if (tabIndex === 1) {
      dispatch(listUsers('employee', 1, 5))
    }
    if (userCreateSuccess) {
      dispatch(listUsers('admin', 1, 5))
      dispatch(listUsers('employee', 1, 5))
    }
  }, [dispatch, tabIndex, userCreateSuccess])
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button
              variant='info'
              className='text-left'
              size='sm'
              onClick={toggleModal}
            >
              Add User
            </Button>
            <AddUserModal isOpen={showModal} toggle={toggleModal} />
          </Col>
        </Row>
      </Container>
      <div className='CustomTabs'>
        <Tabs
          className='Tabs'
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>Admin User List</Tab>
            <Tab>Employee User List</Tab>
          </TabList>

          <TabPanel>
            {loading ? (
              <div>loading..</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <div>
                <table className='table table-bordered'>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Division</th>
                    <th>District</th>
                    <th>Role</th>
                  </tr>

                  {users?.map((adminUser) => (
                    <tr>
                      <AdminUserList adminUser={adminUser} />
                    </tr>
                  ))}
                </table>
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <div>loading..</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <div>
                <table className='table table-bordered'>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Division</th>
                    <th>District</th>
                    <th>Role</th>
                  </tr>

                  {users?.map((adminUser) => (
                    <tr>
                      <AdminUserList adminUser={adminUser} />
                    </tr>
                  ))}
                </table>
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}

export default CustomTabs
