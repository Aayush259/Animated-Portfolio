import React from 'react';

export default function ProjectCard({ projectDetails }) {

    // Getting project details.
    const projectName = projectDetails['name'];
    const projectDescription = projectDetails['description'];
    const projectImage = projectDetails['image'];
    const technologiesUsedInProject = projectDetails['technologiesUsed'];
    const repoLink = projectDetails['repoLink'];
    const liveLink = projectDetails['liveLink'];
    const projectCardStyle = projectDetails['cardStyles'];

    return (
        <div className={`${projectCardStyle["cardBg"]} bg-opacity-65 w-[90vw] border-4 p-2 m-4 mx-auto md:mx-4 max-w-80 z-10 ${projectCardStyle["cardBorderColor"]} border-opacity-65 rounded-2xl relative overflow-hidden group md:left-20 md:m-5 sm:before:w-full sm:before:h-0 sm:before:bg-slate-950 sm:before:block sm:before:absolute sm:before:bottom-0 sm:before:left-0 duration-300 sm:before:duration-300 sm:before:opacity-40 sm:hover:before:h-full`}>
            <div>
                <img src={projectImage} alt="Dictionary Project" className="rounded-lg w-[98%] mx-auto" />
                <div className="w-[96%] mx-auto sm:group-hover:text-white duration-300 relative z-11">
                    <p className={`mt-4 mb-2 text-2xl font-semibold ${projectCardStyle["headingColor"]} ${projectCardStyle["headingColorHover"]}`}>
                        {projectName}
                    </p>

                    <p className="text-sm font-medium tracking-wide">
                        {projectDescription}
                    </p>

                    <TechnologiesUsed technologiesUsedInProject={technologiesUsedInProject} bgColor={projectCardStyle["technologiesBg"]} />

                    <ProjectLinks repoLink={repoLink} liveLink={liveLink} bgColor={projectCardStyle["technologiesBg"]} />

                </div>
            </div>
        </div>
    );
};
