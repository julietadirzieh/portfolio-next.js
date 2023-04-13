import Link from "next/link";

const NavLink = ({ link, children, className }) => {
    return (
        <li className="activeNav">
            <Link
                href={link}
                className={`${className ??
                    "text-violet hover:text-gray-400 hover:bg-white active:bg-gray-100 p-2 rounded-xl transition duration-500 md:text-base text-xs uppercase text-center mx-auto w-full justify-center"
                    } font-link `}
                aria-label="Ir a la sección"
            >
                {children}
            </Link>
        </li>
    );
};

export default NavLink;
