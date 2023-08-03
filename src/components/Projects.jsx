import ProjectTemplate from "./ProjectTemplate"
import data from "../data/dataFile.json"

export default function Projects() {
const {projectData} = data;
    // console.log(projectData);

    return <>
        <section id="projects">
            <div className="project-heading">My Projects <span className='line'></span></div>
           {
             projectData.map((item,index)=>{
                return <ProjectTemplate key={index} info={item} number={index} />
            })
           }
        </section>
    </>
}
