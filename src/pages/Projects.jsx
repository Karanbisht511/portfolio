import templateData from '../data/dataFile'
import Template from "../components/Template"
import ProjectTemplate from '../components/ProjectTemplate'

export default function Projects() {
  return <>
    <div id='projects'>
      <section id="introduction" className="center page-detail">
        <p>
          <b>
            <span style={{ color: 'darkcyan' }}>see </span
            ><span style={{ color: 'blueviolet' }}> my projects</span>
          </b>
        </p>
      </section>

      {templateData && templateData['projectData'].map((item, index) => {
        console.log("item:" + item)
        return <ProjectTemplate key={index} info={item} />
      })}
    </div>
  </>
}