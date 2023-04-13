import React from 'react'
import Course from '../Course'
import { useTranslation } from 'next-i18next'

const Courses = () => {
    const { t } = useTranslation('education')
    return (
        <ul className='list-outside mb-12'>
            <Course name={t("backend")} year="En curso" institution="CoderHouse" />
            <Course name={t("testing")} year="2022" institution="CoderHouse" />
            <Course name={t("python")} year="2022" institution="Codo A Codo" />
            <Course name={t("wordpress")} year="2022" institution="CoderHouse" />
            <Course name={t("frontend")} year="2021" institution="Codo A Codo" />
            <Course name={t("lawyer")} year="2013 - 2018" institution="Universidad de Buenos Aires" />
        </ul>
    )
}

export default Courses