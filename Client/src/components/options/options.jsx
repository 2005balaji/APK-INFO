import React from 'react'
import "./options.css"
import { FiDownload } from 'react-icons/fi';
import Apks from "../Images/options/download.svg";
import Apk from '../Images/history/delete.svg'

function Options() {
  function handleDownloadClick() {
    const filesToDownload = [
      { href: Apks, download: "myfilename.svg" },
      { href: Apk, download: "myfilename2.svg" }
    ];
  
    filesToDownload.forEach(file => {
      const link = document.createElement('a');
      link.href = file.href;
      link.download = file.download;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  

  return (
    <div className='bgdiv' onClick={() => handleDownloadClick()}>
      <FiDownload className="dicon" />
    </div>
  )
}

export default Options;


      {/* <a href="https://www.digitalocean.com/?refcode=8e88753b0481&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg" alt="DigitalOcean Referral Badge" /></a>   */}
   