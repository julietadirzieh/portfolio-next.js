import Link from "next/link";

const DataLink = ({ link, children, className }) => {
    return (
        <li>
            <Link
                href={link}
                className="text-gray-400 hover:text-violet py-2 text-base text-center md:text-left"
                aria-label="Ir a la página"
                target="_blank"

            >
                {children}
            </Link>
        </li>
    );
};

export default DataLink;
