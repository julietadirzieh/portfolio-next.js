import Aside from '../components/Aside'
import HeadLinks from '../components/HeadLinks'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import DevProjects from '../components/DevProjects'
import ProjectsDev2023 from '../components/DevProjects/Projects2023'
import nextI18nextConfig from '../../next-i18next.config'

export default function Projects() {
  return (
    <>
      <div className="max-w-full items-center flex flex-col md:flex-row mx-4 lg:mx-auto">
        <Aside />
        <HeadLinks />
        <main className='flex-auto mt-6 md:mt-0 flex flex-col px-2 pt-6'>
          <section className='text-gray-400 px-0 md:px-12'>
            <DevProjects year="2023">
              <ProjectsDev2023 />
            </DevProjects>
          </section>
        </main>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common'],
        nextI18nextConfig
      )),
    },
  }
}