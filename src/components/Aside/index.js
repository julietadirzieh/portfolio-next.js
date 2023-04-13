import Image from "next/image";
import { useTranslation } from "next-i18next";
import NavLink from "./NavLink";
import Translations from "../Translations/Translations";
import Link from "next/link";

const Aside = () => {
    const { t } = useTranslation('common')
    return (
        <aside className="bg-gray-100 md:w-[220px] md:h-[500px] md:flex-shrink-0 md:mx-0 md:px-0 text-center rounded-xl p-4">
            <Translations />
            <nav className="flex flex-row md:flex-col items-center relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
                <ul className="flex flex-col items-center justify-center gap-5 mx-auto p-8">
                    <NavLink link="/" className="text-center text-violet hover:text-neutral-400 transition duration-500 md:text-base text-xs uppercase my-auto">
                        <Image
                            src="/icons/logoviolet.png"
                            alt="logo"
                            height={50}
                            width={50}
                            className="items-center align-middle mx-auto"
                        />
                        <h1
                            className="bg-violet uppercase p-2 mt-2 text-white rounded shadow-lg hover:bg-gray-400 hover:text-white border border-transparent hover:shadow-lg transition duration-500"
                        >
                            Julieta Dirzieh
                        </h1>
                    </NavLink>
                    <NavLink link="/education">Education</NavLink>
                    <NavLink link="/skills">Skills</NavLink>
                    <NavLink link="/2023">2023</NavLink>
                    <NavLink link="/2022">2022</NavLink>
                    <NavLink link="/2021">2021</NavLink>
                </ul>
            </nav>
        </aside >
    );
};

export default Aside;
