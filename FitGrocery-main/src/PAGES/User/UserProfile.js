import React from 'react'
import { useParams } from 'react-router-dom'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import UserSidebar from '../../COMPONENTS/UserProfile/UserSidebar'
import AccountSettings from '../../COMPONENTS/UserProfile/AccountSettings'
import './UserProfile.css'
import ChangePassword from '../../COMPONENTS/UserProfile/ChangePassword'
import YourOrders from '../../COMPONENTS/UserProfile/YourOrders'
import UserAddress from '../../COMPONENTS/UserProfile/UserAddress'
import LegalNotice from '../../COMPONENTS/UserProfile/LegalNotice'

const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
  return (
    <div className='userprofile'>
        <Navbar/>
        <SingleBanner 
        heading={`My Profile`}
        bannerimage = 'https://media.istockphoto.com/id/1291602223/vector/charity-and-donation-related-web-banner-line-style-modern-design-vector-illustration-for-web.jpg?s=1024x1024&w=is&k=20&c=78ZxJC6u59j4QmakCaovzJYVR1qKAGORrzX1woJf9b4='
        />
        {/* UserProfile , showing {activepage}
         */}

         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings/>}
              {activepage === 'changepassword' && <ChangePassword/>}
              {activepage === 'yourorders' && <YourOrders/>}
              {activepage === 'address' && <UserAddress/>}
              {activepage === 'legalnotice' && <LegalNotice/>}
            </div>
         </div>
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default UserProfile