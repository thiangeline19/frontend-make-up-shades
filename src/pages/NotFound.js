import notFoundImage from '../static/error-404.gif'

export default function NotFound() {
    return (
        <div className='flex flex-grow justify-center'>
            <img src={notFoundImage} alt='404' />
        </div>
    )
}