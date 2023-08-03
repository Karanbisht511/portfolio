import '../pages/style.css'

export default function InfoBox({ info,link }) {

    return <>
    {link ? <div className="infoBox"> <a href={link}>{info}</a> </div> : 
        <div className="infoBox">{info}</div>}
    </>
}