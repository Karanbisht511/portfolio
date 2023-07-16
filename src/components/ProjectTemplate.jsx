export default function ProjectTemplate({ info }) {

    const { Title, Description, Tech, Github, live, status } = info

    return <>
        <section className="center skills oc">
            <div className="content content-center left-align">
                {Title && <div style={{ textAlign: 'center' }}><span className="heading">{Title}</span></div>}
                <table className="project-details">
                    {Description && <tbody><tr><td><span className="heading">Description :</span></td><td><span>{Description}</span></td></tr></tbody>}
                    {Tech && <tbody><tr><td><span className="heading">Tech :</span></td><td><span>{Tech}</span></td></tr></tbody>}
                    {Github && <tbody><tr><td><span className="heading">Github :</span></td><td><a className="link link-blue" target="blank" href={Github}>See Github</a></td></tr></tbody>}
                    {live && <tbody><tr><td><span className="heading">Live :</span></td><td><a className="link link-blue" target="blank" href={live}>See Live </a></td></tr></tbody>}
                    {status && <tbody><tr><td><span className="heading">Status :</span></td><td><span>{status}</span></td></tr></tbody>}
                </table>
            </div>
        </section>
    </>
}
