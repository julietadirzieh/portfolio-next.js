import React from 'react'
import { useTranslation } from 'next-i18next';
import Title from '../Title';

const DevProjects = ({ children, year }) => {
    const { t } = useTranslation('common')
    return (
        <>
            <Title caption={`${t("projects")} - ${year}`} />
            <div className='my-4'>
                <div>{children}</div>
            </div>
        </>
    )
}

export default DevProjects;