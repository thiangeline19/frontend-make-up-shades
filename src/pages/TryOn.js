import { useState } from 'react'
import Layout from '../component/Layout'
import cameraOff from '../static/close-cam.svg'
import tipsShades from '../static/tips-try-on.svg'

export default function TryOn() {
  const [cameraOn, setCameraOn] = useState(false)

  const handleCamera = () => {
    setCameraOn(!cameraOn)
  }

  const tipsTryOn = () => {
    return (
      <div className='flex flex-col flex-shrink ml-6 items-center mt-5'>
        <p className='text-justify font-semibold'>Tekan pada keyboard berdasarkan angka pada pilihan di samping kamera</p>
        <p className='text-justify font-semibold mt-6'>Contoh:</p>
        <p className='text-justify font-semibold mb-6'>kamu ingin apply eyeshadow no. 1, maka kamu harus tekan ‘1’ pada keyboard kamu. Maka eyeshadow no. 1 akan terapply di kelopak matamu.
        </p>
        <p className='text-justify font-semibold'>Selamat mencoba!</p>
      </div>
    )
  }

  return (
    <Layout disableButton={!!cameraOn} >
      <div className='flex flex-col'>
        {cameraOn ? (
          <>
            <div className='flex flex-col items-end mr-5'>
              <div className='flex flex-row'>
                <iframe
                  className='flex flex-grow'
                  src='http://localhost:5000/video_feed'
                  title='Video Feed'
                  width='600'
                  height='380'
                />
                <img src={tipsShades} alt='tips' />
              </div>
            </div>
            <div className='flex justify-center'>
              <button className='mt-5 border-2 border-white w-[280px] rounded-3xl font-semibold bg-pink-button text-white py-3 px-10' onClick={() => handleCamera()}>
                Close Camera
              </button>
            </div>
            {tipsTryOn()}
          </>
        ) : (
          <div className='flex flex-col items-center'>
            <div className='flex flex-col'>
              <img src={cameraOff} alt='camera-off' />
            </div>
            <button className='mt-5 border-2 border-white w-[280px] rounded-3xl font-semibold bg-pink-button text-white py-3 px-10' onClick={() => handleCamera()}> Open Camera </button>
          </div>
        )}
      </div>
    </Layout >
  )
}
