import React from 'react'

const AdminUserList = ({adminUser}) => {
  return (
    <>
      <td>{adminUser.first_name}</td>
      <td>{adminUser.last_name}</td>
      <td>{adminUser.division ? adminUser.division : '-'}</td>
      <td>{adminUser.district ? adminUser.district : '-'}</td>
      <td>{adminUser.user_type}</td>
    </>
  )
}

export default AdminUserList