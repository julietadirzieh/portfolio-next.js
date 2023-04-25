import React from "react";
import Skill from "../Skill";
import skills from "./skills";

const Skills = () => {

    return (
        <div className="w-full pb-6 grid grid-cols-3 gap-6 my-4">
            {skills.map((card, index) => {
                return (
                    <Skill
                        key={index}
                        img={card.src}
                        name={card.name}
                    />
                );
            })}

        </div>
    );
};

export default Skills;
