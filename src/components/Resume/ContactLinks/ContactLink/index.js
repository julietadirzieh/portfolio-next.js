import Image from "next/image";
import Link from "next/link";

const ContactLink = ({ link, src }) => {
    return (
        <li>
            <Link
                href={link}
                className="text-gray-400 hover:text-violet px-4 text-base text-center md:text-left"
                aria-label="Ir a la página"
                target="_blank"

            >
                <Image
                    src={src}
                    alt="Picture of the author"
                    height={150}
                    width={150}
                    className="inline mt-2 mx-auto md:mx-0 w-7 h-7 "
                />
            </Link>
        </li>
    );
};

export default ContactLink;
