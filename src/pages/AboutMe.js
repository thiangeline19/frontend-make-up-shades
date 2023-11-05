import Layout from '../component/Layout'

export default function Homepage() {
  return (
    <Layout>
      <div className='flex justify-center'>
        <div className='flex flex-col bg-body-image rounded-homepage-image w-[1000px] justify-center items-center'>
          <p className='font-bold text-3xl pt-4'>About Me</p>

          <div className='flex flex-row justify-between gap-10 px-40 py-12'>
            <div className='flex min-w-[125px] h-[175px] bg-black mb-8'>
              <div className='flex flex-grow bg-transparent p-10' />
            </div>
            <div className='flex flex-col flex-shrink'>
              <p className='text-md font-semibold'>
                Perkenalkan nama saya Dameethia Angeline dengan NIM 535200001 dari prodi Teknik
                Informatika Fakultas Teknologi Informasi Universitas Tarumanagara
              </p>
              <p className='text-sm font-thi'>
                Perkenalkan nama saya Dameethia Angeline dengan NIM 535200001 dari prodi Teknik
                Informatika Fakultas Teknologi Informasi Universitas Tarumanagara eo id nibh
                aliquet, id bibendum eros iaculis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Quisque ullamcorper l eo id nibh aliquet, id bibendum eros
                iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper
                l eo id nibh aliquet, id bibendum eros iaculis.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Quisque ullamcorper l eo id nibh aliquet, id bibendum
                eros iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ullamcorper l eo id nibh aliquet, id bibendum eros iaculis.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Quisque ullamcorper l eo id nibh aliquet, id
                bibendum eros iaculis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
