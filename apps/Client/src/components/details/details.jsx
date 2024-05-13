import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useNavigate } from "react-router-dom";



function details({ apkinfo }) {

  const navigate = useNavigate()


  useEffect(() => {
    if (!apkinfo.application_Name) {
      navigate('/')
    }
  }, [])


  return (<>
    <div id='details outerdiv'>

    <div id="logDetailsAppName">
        {apkinfo.application_Name}
      </div>

      <hr id="historyHR" />


      <div id='toc'>
        <table id="tablebottompadding">
          <thead>
            <tr>
              <td id="tableborder">Application name</td>
              <td id="tableborder">{apkinfo.application_Name}</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td id="tableborder">MinSDK version</td>
              <td id="tableborder">{apkinfo.minsdkVersion}</td>
            </tr>
            <tr>
              <td id="tableborder">TargetSdk version</td>
              <td id="tableborder">{apkinfo.targetSdkVersion}</td>
            </tr>
            <tr>
              <td id="tableborder">Version name</td>
              <td id="tableborder">{apkinfo.versionName}</td>
            </tr>
            <tr>
              <td id="tableborder">Version code</td>
              <td id="tableborder">{apkinfo.versionCode}</td>
            </tr>
            <tr>
              <td id="tableborder">Supported screen sizes</td>
              <td id="tableborder">{apkinfo.supportScreensizes}</td>
            </tr>

            <tr>
              <td id="tableborder">Supported screen densities</td>
              <td id="tableborder" className='overflow'>{apkinfo.supportedScreendensities}</td>
            </tr>
            <tr>
              <td id="tableborder">Features</td>
              <td id="tableborder" className='overflow'>{apkinfo.features}</td>
            </tr>
            <tr>
              <td id="tableborder">Permissions</td>
              <td id="tableborder" className='overflow'>{apkinfo.permissions}</td>
            </tr>

            <tr>
              <td id="tableborder">Languages</td>
              <td id="tableborder" className='overflow'>{apkinfo.languages}</td>
            </tr>

            <tr>
              <td id="tableborder">Signature</td>
              <td id="tableborder" className='overflow'>{apkinfo.signatures}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
  )
}

export default details

