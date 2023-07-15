import webDeveloper from '../images/web-developer.svg'

export default function Intro() {

    return <>
        <section id="introduction" className="center">
            <img
                className="web_dev_photo"
                src={webDeveloper}
                alt="web-developer"
            />
            <p>
                <b>
                    <span style={{ color: 'darkcyan' }}>Karan Bisht the </span>
                    <span style={{ color: 'blueviolet' }}> web developer</span>
                </b>
            </p>
        </section>
    </>
}