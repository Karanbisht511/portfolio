import { Link, useNavigate } from 'react-router-dom'
import RoundBox from './RoundBox'

export default function Template({ info }) {
    const { header, content, link } = info
    const navigate = useNavigate()

    return <>
        <section className="center skills oc">
            <div className="content">
                <h1>{header}</h1>
                {content.length === 1 ? <p>{content}</p> 
                :
                 <div className='tech-wrapper'>
                    {content.map((item, index) => { return <RoundBox key={index} skill={item} /> })}
                </div>
                }
                {link && <Link to={`/${link}`} className="link link-blue"  > {link} </Link>}
            </div>
        </section>
    </>
}