import InfoBox from "./InfoBox"

export default function ProjectTemplate({ info, number }) {

    const { Title, Description, Tech, Github, live, status,problemStatement,solution } = info

    return <>
        <section className="template-project">
            <div className="project-wrapper">
                {/* <div className="left"> */}
                <div className="project-template-heading-container">
                    <span className="project-template-heading">&lt;{Title}&gt;</span>
                </div>
                <div className="links">
                    <InfoBox info={Tech} />
                    <InfoBox info="Github" />
                    <InfoBox info="Live Projects" link={live} />
                </div>
                {/* </div> */}
                {/* <div className="right"> */}
                <div className="project-number">project 0{number + 1}.</div>
                <div className="statement">
                    <div>
                        <h1 className="problem-statement">Problem Statement</h1>
                        <p className="para">{problemStatement}</p>
                    </div>

                    <div>
                        <h1 className="solution">Solution</h1>
                        <p className="para">{solution}</p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    </>
}
