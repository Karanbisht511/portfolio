import { Link, useNavigate } from 'react-router-dom'

export default function TechTemplate({ info }) {
    const { header, content, link } = info
    const navigate = useNavigate()

    return <>
        <section className="center skills oc">
            <div className="content">
                <h1>{header}</h1>
                <p>{content}</p>
            </div>
        </section>
    </>
}