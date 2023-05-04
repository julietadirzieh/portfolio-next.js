import { useRouter } from "next/router";

export default function Translations() {
    const router = useRouter();

    const changeLang = (locale) => {
        router.replace(router.pathname, router.pathname, { locale });
    };

    return (
        <div className='mx-auto md:my-8 flex justify-center'>
            <button
                className={`mx-1 px-1 font-bold text-gray-400 ${router.locale === 'es' ? "bold" : "font-thin"}`}
                onClick={() => changeLang('es')}
            >
                ES
            </button>
            <p className=' text-violet'> / </p>
            <button
                className={`mx-1 px-1 font-bold text-gray-400 ${router.locale === 'en' ? "bold" : "font-thin"}`}
                onClick={() => changeLang('en')}
            >
                EN
            </button>

        </div>
    );
}