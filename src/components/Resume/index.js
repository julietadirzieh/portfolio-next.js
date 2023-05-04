import Image from 'next/image';
import React from 'react'
import DataLinks from './DataLinks';
import DataLink from './DataLinks/DataLink';
import { useTranslation } from 'next-i18next'

const Resume = () => {
    const { t } = useTranslation('home')
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-5 px-12 md:px-0 md:justify-center mt-2 gap-4 items-cente pl-12">
                <Image
                    src="/images/julieta.jpeg"
                    alt="Picture of the author"
                    height={150}
                    width={150}
                    className="object-cover object-top rounded-full p-1 mt-4 bg-violet mx-auto md:mx-0"
                />
                <DataLinks>
                    <DataLink link="https://goo.gl/maps/ibUKkxXKJSpQEWXe6">{t('country')}</DataLink>
                    <DataLink link="">{t('birthdate')}</DataLink>
                </DataLinks>
            </div>
            <h3 className="text-xl mt-6 px-12 md:px-0 text-justify mb-12">{t("bio")}</h3>
        </>

    )
}

export default Resume;
