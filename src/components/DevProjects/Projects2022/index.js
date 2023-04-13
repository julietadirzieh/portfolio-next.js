import React from "react";
import Project from "../Project";
import listProjects2022 from "./listProjects2022";

const ProjectsDev2022 = () => {

    return (
        <div className="w-full pb-6 grid grid-cols-2 gap-6">
            {listProjects2022.map((data, index) => {
                return (
                    <Project
                        key={index}
                        data={data}
                    />
                );
            })}
        </div>
    );
};

export default ProjectsDev2022;
