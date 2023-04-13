import Aside from '../components/Aside'
import HeadLinks from '../components/HeadLinks'
import Resume from '../components/Resume'
import Title from '../components/Title'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from '../../next-i18next.config'

export default function Home() {
  return (
    <div className="max-w-4xl flex flex-col md:flex-row mx-auto mt-8 md:mt-20 lg:mt-32">
      <Aside />
      <HeadLinks />
      <main className='flex-auto mt-6 md:mt-0 flex flex-col px-2 md:px-0'>
        <section className='text-gray-400 pl-0 md:pl-12'>
          <Title caption="Julieta Dirzieh" />
          <Resume />
        </section>
      </main>
    </div >
  )
}

export async function getStaticProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['home'],
        nextI18nextConfig
      )),
    },
  }
}