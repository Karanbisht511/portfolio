export default function Template({ info }) {
    const { header, content, link } = info
    return <>
        <section className="center skills oc">
            <div className="content">
                <h1>{header}</h1>
                <p>{content}</p>
                <a id={link} className="link link-blue" href="">{link}</a>
            </div>
        </section>
    </>
}