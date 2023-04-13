import React from 'react'
import Title from '../Title'
import Courses from './Courses'
import { useTranslation } from 'next-i18next'

const Education = () => {
    const { t } = useTranslation('education')
    return (
        <>
            <Title caption={t("education")} />
            <div className='my-4'>
                <Courses />
            </div>
        </>
    )
}

export default Education