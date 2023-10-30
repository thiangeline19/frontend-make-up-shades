import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="w-full bg-white shadow-md z-[1]">
      <div className='flex flex-row items-center justify-between py-3 w-[1200px] xl:w-[1280px] mx-auto'>
        <div className='flex flex-grow justify-center py-7 px-6'>
          <p className='font-bold text-2xl cursor-pointer'><Link to={'/'}>Sistem Pemilihan Shade Alat Make Up</Link></p>
        </div>
        <div className='flex flex-grow flex-row justify-end gap-24 py-7 px-6'>
          <Link to={'/'}><p className='text-base text-teal-600 cursor-pointer'>Beranda</p></Link>
          <Link to={'/tutorial'}><p className='text-base text-teal-600 cursor-pointer'>Tutorial</p></Link>
          <Link to={'/try-on'}><p className='text-base text-teal-600 cursor-pointer'>Try-On</p></Link>
          <Link to={'/about-me'}><p className='text-base text-teal-600 cursor-pointer'>About Me</p></Link>
        </div>
      </div>
    </div>
  )
}
