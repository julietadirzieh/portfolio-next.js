import Image from "next/image";
import { useTranslation } from "next-i18next";
import NavLink from "./NavLink";
import Translations from "../Translations/Translations";
import Link from "next/link";
import ContactLinks from "../Resume/ContactLinks";
import ContactLink from "../Resume/ContactLinks/ContactLink";

const Aside = () => {
    const { t } = useTranslation('common')
    return (
        <aside className="bg-gray-100 md:w-[220px] h-full md:h-screen md:flex-shrink-0 md:mx-0 md:px-0 text-center rounded-xl p-8">
            <Translations />
            <Link href="/" className="text-center text-violet hover:text-neutral-400 transition duration-500 md:text-base text-xs uppercase my-auto">
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
            </Link>
            <nav className="flex flex-row md:flex-col items-center relative px-4 md:px-0 pb-0 fade md:overflow-auto md:relative">
                <ul className="flex flex-row md:flex-col flex-wrap items-center justify-center gap-5 mx-auto pt-8 md:p-8">
                    <NavLink link="/education">{t("education")}</NavLink>
                    <NavLink link="/skills">{t("skills")}</NavLink>
                    <NavLink link="/2023">2023</NavLink>
                    <NavLink link="/2022">2022</NavLink>
                    <NavLink link="/2021">2021</NavLink>
                </ul>
            </nav>
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
                    src="/icons/whatsapp.svg"
                />
                <ContactLink
                    link="https://github.com/julietadirzieh"
                    src="/icons/github.svg"
                />
            </ContactLinks>
        </aside >
    );
};

export default Aside;
