import Image from 'next/image';
import React from 'react'
import DataLinks from './DataLinks';
import DataLink from './DataLinks/DataLink';
import { useTranslation } from 'next-i18next'
import ContactLink from './ContactLinks/ContactLink';
import ContactLinks from './ContactLinks';

const Resume = () => {
    const { t } = useTranslation('home')
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 px-12 md:px-0 md:justify-center mt-2 gap-4 items-center">
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

            <ContactLinks>
                <ContactLink
                    link="https://www.linkedin.com/in/julieta-erika-dirzieh-59b50a159/"
                    src="/icons/linkedin.svg"
                />
                <ContactLink
                    link="mailto:julidirzieh@gmail.com"
                    src="/icons/mail.svg"
                />
                <ContactLink
                    link="https://api.whatsapp.com/send?phone=5491158125574"
                    src="/icons/telefono.svg"
                />
            </ContactLinks>
        </>

    )
}

export default Resume;
