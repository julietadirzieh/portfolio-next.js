import Aside from '../components/Aside'
import HeadLinks from '../components/HeadLinks'
import Resume from '../components/Resume'
import Title from '../components/Title'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from '../../next-i18next.config'

export default function Home() {
  return (
    <div className="max-w-full flex flex-col md:flex-row mx-4 lg:mx-auto">
      <Aside />
      <HeadLinks />
      <main className='flex-auto mt-6 md:mt-0 flex flex-col px-2 pt-6'>
        <section className='text-gray-400 px-0 md:px-12 lg:pr-32'>
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
        ['home', 'common'],
        nextI18nextConfig
      )),
    },
  }
}