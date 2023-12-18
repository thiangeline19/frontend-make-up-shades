import { useState } from 'react'
import Layout from '../component/Layout'
import cameraOff from '../static/close-cam.svg'
import alatMakeup from '../static/alatmakeup.svg'

export default function TryOn() {
  const [cameraOn, setCameraOn] = useState(false)

  const [activeFilter, setActiveFilter] = useState(null)

  const setFilter = (key) => {
    console.log(`Sending filter key: ${key}`)
    fetch(`http://localhost:5000/set_filter?keys=${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {},
      credentials: 'include', // Include credentials in the request
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        console.log(data.message)
        setActiveFilter(key)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const handleFilterClick = (key) => {
    // Call setFilter directly from the button click
    setFilter(key)
  }

  const handleCamera = () => {
    setCameraOn(!cameraOn)
  }

  const buttonFilter = () => {
    return (
      <div>
        <div className='flex flex-col items-center pl-4'>
          <img
            src={alatMakeup}
            alt='SVG Image'
            className='w-60 h-30' // Sesuaikan ukuran gambar sesuai kebutuhan Anda
          />
          <div className='flex flex-row'>
            <div className='flex flex-col flex-shrink ml-6 items-center'>
              <p className='text-justify font-semibold'>Eyeshadow</p>
            </div>
          </div>
          <div className='flex flex-row'>
            <button
              className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-eyeshadow-1 text-white py-2 px-2 ${
                activeFilter === '1' ? 'active' : ''
              }`}
              onClick={() => handleFilterClick('1')}
            >
              1
            </button>
            <button
              className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-eyeshadow-2 text-white py-2 px-2 ${
                activeFilter === '2' ? 'active' : ''
              }`}
              onClick={() => handleFilterClick('2')}
            >
              2
            </button>
            <button
              className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-eyeshadow-3 text-white py-2 px-2 ${
                activeFilter === '3' ? 'active' : ''
              }`}
              onClick={() => handleFilterClick('3')}
            >
              3
            </button>
            <button
              className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-eyeshadow-4 text-white py-2 px-2 ${
                activeFilter === '4' ? 'active' : ''
              }`}
              onClick={() => handleFilterClick('4')}
            >
              4
            </button>
            <button
              className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-eyeshadow-5 text-white py-2 px-2 ${
                activeFilter === '5' ? 'active' : ''
              }`}
              onClick={() => handleFilterClick('5')}
            >
              5
            </button>
            <button
              className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-eyeshadow-6 text-white py-2 px-2 ${
                activeFilter === '6' ? 'active' : ''
              }`}
              onClick={() => handleFilterClick('6')}
            >
              6
            </button>
            <button
              className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-eyeshadow-7 text-white py-2 px-2 ${
                activeFilter === '7' ? 'active' : ''
              }`}
              onClick={() => handleFilterClick('7')}
            >
              7
            </button>
            <button
              className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-eyeshadow-8 text-white py-2 px-2 ${
                activeFilter === '8' ? 'active' : ''
              }`}
              onClick={() => handleFilterClick('8')}
            >
              8
            </button>
            <button
              className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-eyeshadow-9 text-white py-2 px-2 ${
                activeFilter === '9' ? 'active' : ''
              }`}
              onClick={() => handleFilterClick('9')}
            >
              9
            </button>
            <button
              className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-eyeshadow-10 text-white py-2 px-2 ${
                activeFilter === '10' ? 'active' : ''
              }`}
              onClick={() => handleFilterClick('10')}
            >
              10
            </button>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col flex-shrink ml-6 items-center mt-5'>
              <p className='text-justify font-semibold'>Blush On</p>
            </div>
          </div>
          <div className='flex flex-row'>
            <div>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-blushon-1 text-white py-2 px-2 ${
                  activeFilter === '11' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('11')}
              >
                1
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-blushon-2 text-white py-2 px-2 ${
                  activeFilter === '12' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('12')}
              >
                2
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-blushon-3 text-white py-2 px-2 ${
                  activeFilter === '13' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('13')}
              >
                3
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-blushon-4 text-white py-2 px-2 ${
                  activeFilter === '14' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('14')}
              >
                4
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-blushon-5 text-white py-2 px-2 ${
                  activeFilter === '15' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('15')}
              >
                5
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-blushon-6 text-white py-2 px-2  ${
                  activeFilter === '16' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('16')}
              >
                6
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-blushon-7 text-white py-2 px-2 n ${
                  activeFilter === '17' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('17')}
              >
                7
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-blushon-8 text-white py-2 px-2  ${
                  activeFilter === '18' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('18')}
              >
                8
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-blushon-9 text-white py-2 px-2  ${
                  activeFilter === '19' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('19')}
              >
                9
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-blushon-10 text-white py-2 px-2 ${
                  activeFilter === '20' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('20')}
              >
                10
              </button>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col flex-shrink ml-6 items-center mt-5'>
              <p className='text-justify font-semibold'>Lipstick</p>
            </div>
          </div>
          <div className='flex flex-row'>
            <div>
              <button
                className={`fborder-2 border-white w-[45px] rounded-3xl font-semibold bg-lipstick-1 text-white py-2 px-2 ${
                  activeFilter === '21' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('21')}
              >
                1
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-lipstick-2 text-white py-2 px-2 ${
                  activeFilter === '22' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('22')}
              >
                2
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-lipstick-3 text-white py-2 px-2 ${
                  activeFilter === '23' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('23')}
              >
                3
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-lipstick-4 text-white py-2 px-2 ${
                  activeFilter === '24' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('24')}
              >
                4
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-lipstick-5 text-white py-2 px-2 ${
                  activeFilter === '25' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('25')}
              >
                5
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-lipstick-6 text-white py-2 px-2 ${
                  activeFilter === '26' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('26')}
              >
                6
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-lipstick-7 text-white py-2 px-2 ${
                  activeFilter === '27' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('27')}
              >
                7
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-lipstick-8 text-white py-2 px-2 ${
                  activeFilter === '28' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('28')}
              >
                8
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-lipstick-9 text-white py-2 px-2 ${
                  activeFilter === '29' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('29')}
              >
                9
              </button>
              <button
                className={`border-2 border-white w-[45px] rounded-3xl font-semibold bg-lipstick-10 text-white py-2 px-2 ${
                  activeFilter === '30' ? 'active' : ''
                }`}
                onClick={() => handleFilterClick('30')}
              >
                10
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout disableButton={!!cameraOn}>
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
                {buttonFilter()}
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                className='mt-5 border-2 border-white w-[280px] rounded-3xl font-semibold bg-pink-button text-white py-3 px-10'
                onClick={() => handleCamera()}
              >
                Close Camera
              </button>
            </div>
          </>
        ) : (
          <div className='flex flex-col items-center'>
            <div className='flex flex-col'>
              <img src={cameraOff} alt='camera-off' />
            </div>
            <button
              className='mt-5 border-2 border-white w-[280px] rounded-3xl font-semibold bg-pink-button text-white py-3 px-10'
              onClick={() => handleCamera()}
            >
              {' '}
              Open Camera{' '}
            </button>
          </div>
        )}
      </div>
    </Layout>
  )
}
