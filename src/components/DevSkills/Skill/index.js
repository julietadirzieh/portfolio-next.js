import Image from "next/image";
import React from "react";

const Skill = ({ img, name }) => {
    return (
        <div className="text-center items-center justify-center">
            <Image
                src={img}
                className="max-w-150px aspect-square object-cover rounded-full mx-auto"
                alt="lenguaje"
                width={80}
                height={80}
            />
            <h3 className="font-bold text-lg">{name}</h3>
        </div>
    );
};

export default Skill;
