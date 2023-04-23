import React from 'react'
import "./options.css"
import { FiDownload } from 'react-icons/fi';
import Apk1 from "../APK's/Test.apk"
import Apk2 from "../APK's/Test2.apk"

function Options() {
  function handleDownloadClick() {
    const filesToDownload = [
      { href: Apk1, download: "test.apk" },
      { href: Apk2, download: "test2.apk" }
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
    <div className='options'>
      <div className='bgdiv' onClick={() => handleDownloadClick()}>
        <FiDownload className="dicon" />


      </div>

      <div >
        <a target="_blank" href="https://www.digitalocean.com/?refcode=8e88753b0481&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg" alt="DigitalOcean Referral Badge" /></a>

      </div>
    </div>

  )
}

export default Options;


