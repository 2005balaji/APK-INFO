import React from 'react'
import './guides.css'

function guides() {
  return (
    <div>
      <h2 id='heading'> How to Use</h2>

      <div className='texthtu'>
        <p className='txtmargin '><img className='vidgif' src="https://res.cloudinary.com/dhdzwkwqg/image/upload/v1681280475/ezgif.com-video-to-gif_1_kmsi0h.gif" alt="" /></p>
        <div id='padding'>
        <p className='txtmargin'>To upload your APK file, follow these simple steps:</p>
        <p className='txtmargin'>Drag and drop your APK file onto the application.</p>
        <p className='txtmargin'>Wait for the application to finish uploading the file to the server.</p>
        <p className='txtmargin'>View all the required details of the APK file that you uploaded.</p>
        <p className='txtmargin'>Once your APK file has been uploaded, you can access your logs by clicking on "My Logs" in the navigation bar.</p>
        <p className='txtmargin'> From there, you can view or delete your log files.</p>
        <p className='txtmargin'>If you need to logout, simply click on your profile and select the "Logout" option.</p>
        <p className='txtmargin'>With these easy-to-follow instructions, you'll be able to upload and manage your APK files in no time!</p>
        </div>
      </div>
    </div>
  )
}

export default guides