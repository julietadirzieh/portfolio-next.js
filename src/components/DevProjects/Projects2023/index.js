import React from "react";
import Project from "../Project";
import listProjects2023 from "./listProjects2023";

const ProjectsDev2023 = () => {

    return (
        <div className="w-full pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listProjects2023.map((data, index) => {
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

export default ProjectsDev2023;
