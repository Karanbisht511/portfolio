import myPhoto from '../images/my_photo.png'

export default function About() {

    return <>
        <div id='introduction-container'>
            <section id="introduction">
                <div className='intro'>
                    <div className="intro-name sub-heading">Hello,I'm Karan Bisht,</div>
                    <div className="intro-role">Frontend Developer</div>
                    <div className='link-resume link'> <a href="https://drive.google.com/file/d/1HJ0J3eg4K4CJHdvmGzeSlPm5-NhaJ0We/view?usp=drive_link" target='_blank'> Resume</a></div>
                </div>
                <div className='photo'>
                    <img src={myPhoto} alt="" />
                </div>
            </section>
            <section id="aboutme">
                <div className='aboutme-heading'>About me <span className='line'></span></div>
                <p className='aboutme-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa assumenda eveniet fuga molestias rerum dolorum obcaecati nobis eius? Ab modi consequuntur veniam iste nulla itaque similique quasi cum hic earum.</p>
            </section>
        </div>
    </>
}
