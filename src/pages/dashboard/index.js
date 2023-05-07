import { useState } from 'react';
import { NormalTabs } from '../../components/common'
import { BannerDashboard } from '../../components/page'

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('1');
  const tabsList = [
    {
      label: "Banner",
      value: "1"
    },
    {
      label: "About",
      value: "2"
    },
    {
      label: 'Customer Feedback',
      value: "3"
    }
  ]


  const handleChangeTabe = (newValue) => {
    setActiveTab(newValue);
  };




  return (

    <div className="row">
      <div className="col-md-12 mb-5">
        <h4>Home Page</h4>

      </div>
      <div className="col-md-12">
        <NormalTabs data={tabsList} value={activeTab} onChange={handleChangeTabe} />
        
       

      </div>
      <div className="col-md-12">
          <BannerDashboard/>
        </div>
    </div>
  )
}