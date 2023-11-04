import axios from 'axios'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function BackendWebcam({ handleCamera }) {
  const [openClose, setOpenClose] = useState(false)

  const handleOpen = async () => {
    try {
      const response = await axios.get('http://localhost:5000/?camera=on')
      if (response.status === 200) {
        setOpenClose(true)
        handleCamera()
      }
    } catch (error) {
      console.error('Error opening camera:', error)
    }
  }

  const handleClose = async () => {
    try {
      const response = await axios.get('http://localhost:5000/?camera=off')
      if (response.status === 200) {
        setOpenClose(false)
        handleCamera()
      }
    } catch (error) {
      console.error('Error closing camera:', error)
    }
  }

  return (
    <>
      {!openClose ? (
        <>
          <img alt='no-camera' className='rounded mx-auto d-block fix-placeholder mt-sm-5' />
          <button className='btn btn-lg btn-home mt-sm-5 mx-sm-3' onClick={() => handleOpen()}>
            Open Camera
          </button>
        </>
      ) : (
        <>
          <img
            src='http://localhost:5000/'
            alt='webCam'
            className='rounded mx-auto d-block fix-placeholder mt-sm-5'
          />
          <button className='btn btn-lg btn-home mt-sm-5 mx-sm-3' onClick={() => handleClose()}>
            Close Camera
          </button>
        </>
      )}
    </>
  )
}

BackendWebcam.propTypes = {
  handleCamera: PropTypes.func.isRequired,
}
