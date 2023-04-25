import Link from "next/link";
import React, { useState } from "react";

const Project = ({ data }) => {
    const { src, name, description, link
    } = data
    /*     const [loading, setLoading] = useState(false) */


    return (
        <div className="flex flex-col items-start">
            {/*             {loading &&
                <Loader />
            } */}
            <Link
                href={link}
                className="text-violet font-bold hover:underline hover:text-gray-400 p-2 rounded-xl text-xl uppercase text-center mx-auto w-full justify-center"
                aria-label="Ir a la página web desarrollada"
                target="_blank"
            >
                <img
                    src={src}
                    alt="gif de la pagina"
                    className="rounded-xl my-3"
                /*                 onLoadedData={() => setLoading(false)} */
                />
                {name}
            </Link>
            <div className="text-base text-center mx-auto">{description}</div>
        </div >
    );
};

export default Project;
