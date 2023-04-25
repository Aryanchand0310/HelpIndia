import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const Termsandconditions = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        heading="Terms & Conditions"
      />


      <div className='pgcont1'>
        <h3>Limitation of Liability:\</h3>
        <p>We will not be liable for any damages or losses arising from your use of our website or your donation, except in cases of willful misconduct or gross negligence.</p>
      </div>
      <div className='pgcont1'>
        <h3>Governing Law:</h3>
        <p>These terms and conditions are governed by the laws of [insert state/country]. Any disputes arising from your use of our website or your donation shall be resolved in the courts of [insert state/country]..</p>
      </div>

      <div className='pgcont1'>

        <h3>Changes to Terms and Conditions:</h3>
        <p>We reserve the right to change these terms and conditions at any time, without prior notice. By continuing to use our website and make donations after such changes are made, you agree to be bound by the updated terms and conditions.</p>
      </div>

      <div className='pgcont1'>
        <h3>Why do we use it?</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>

      <div className='pgcont1'>
        <h3>Changes to Terms and Conditions:</h3>
        <p>"We reserve the right to change these terms and conditions at any time, without prior notice. By continuing to use our website and make donations after such changes are made, you agree to be bound by the updated terms and conditions.."</p>
      </div>

      <div className='pgcont1'>
        <h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Termsandconditions