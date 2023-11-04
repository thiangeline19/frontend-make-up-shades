import { useState } from 'react'
import Layout from '../component/Layout'
import BackendWebcam from '../template/BackendWebcam'

export default function TryOn() {
  const [cameraOn, setCameraOn] = useState(false)

  const handleCamera = () => {
    setCameraOn(!cameraOn)
  }

  return (
    <Layout>
      <div className='flex flex-col items-center'>
        {cameraOn ? (
          <div className='flex flex-col'>
            <iframe
              src='http://localhost:5000/video_feed'
              title='Video Feed'
              width='600'
              height='380'
              frameBorder='0'
              allowFullScreen
            />
            <button onClick={() => handleCamera()}> Close Camera </button>
          </div>
        ) : (
          <div className='flex flex-col w-[600px] h-[380px]'>
            <div className='flex bg-black' />
            <button onClick={() => handleCamera()}> Open Camera </button>
          </div>
        )}
      </div>
    </Layout>
  )
}
