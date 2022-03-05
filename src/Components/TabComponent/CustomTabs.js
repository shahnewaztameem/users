import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './CustomTabs.css'

const CustomTabs = () => {
  return (
    <div className='CustomTabs'>
      <Tabs className='Tabs'>
        <TabList>
          <Tab>Admin User List</Tab>
          <Tab>Employee User List</Tab>
        </TabList>

        <TabPanel>
          <h2>Admin</h2>
        </TabPanel>
        <TabPanel>
          <h2>Employee</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default CustomTabs
