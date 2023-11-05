import Layout from "../component/Layout"

import tutorial from '../static/tutorial.svg'

export default function Tutorial() {
    return (
        <Layout>
            <div className='flex items-center p-5'>
                <img src={tutorial} alt='tutorial' />
            </div>
        </Layout>
    )
}