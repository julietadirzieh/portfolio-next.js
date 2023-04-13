import Loader from "../../Loader";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Project = ({ data }) => {
    const { src, name, description, link
    } = data
    /*     const [loading, setLoading] = useState(false) */


    return (
        <div className="text-center mx-auto items-center justify-center">
            {/*             {loading &&
                <Loader />
            } */}
            <img
                src={src}
                alt="gif de la pagina"
                className="rounded-xl my-3"
            /*                 onLoadedData={() => setLoading(false)} */
            />
            <Link
                href={link}
                className="text-violet font-bold hover:underline hover:text-gray-400 p-2 rounded-xl text-xl uppercase text-center mx-auto w-full justify-center"
                aria-label="Ir a la página web desarrollada"
                target="_blank"
            >
                {name}
            </Link>
            <div className="text-base">{description}</div>
        </div >
    );
};

export default Project;
