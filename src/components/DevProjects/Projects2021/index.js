import React from "react";
import Project from "../Project";
import listProjects2021 from "./listProjects2021";

const ProjectsDev2021 = () => {

    return (
        <div className="w-full pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {listProjects2021.map((data, index) => {
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

export default ProjectsDev2021;
