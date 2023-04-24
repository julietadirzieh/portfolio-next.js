
import React from 'react'
import Skills from './Skills';
import { useTranslation } from "next-i18next"
import Title from '../Title';

const DevSkills = () => {
    const { t } = useTranslation()
    return (
        <>
            <Title caption={t("skills")} />
            <div className='mt-4 mb-8'>
                <Skills />
                <div className='mt-6 grid grid-cols-1 md:grid-cols-2'>
                    <h3 className="text-center md:text-left font-bold text-lg p-2">· Git</h3>
                    <h3 className="text-center md:text-left font-bold text-lg p-2">· Tailwind CSS y Bootstrap</h3>
                    <h3 className="text-center md:text-left font-bold text-lg p-2">· Redux Toolkit</h3>
                    <h3 className="text-center md:text-left font-bold text-lg p-2">· MySQL, MongoDB y FireBase</h3>
                </div>
            </div>
        </>
    )
}

export default DevSkills;