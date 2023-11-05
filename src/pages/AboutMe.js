import Layout from '../component/Layout'
import aboutMe from '../static/about-me.svg'

export default function Homepage() {
  return (
    <Layout>
      <div className='flex items-center p-5'>
        <img src={aboutMe} alt='tutorial' />
      </div>
    </Layout>
  )
}
