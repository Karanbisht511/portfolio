import SkillBox from './SkillBox'

export default function Skills() {
    return <>
      <section id='skills'>
        <div className='skill-heading'>Skills</div>
        <div className='skill-list'>
            <SkillBox skill="HTML/CSS" />
            <SkillBox skill="Javascript" />
            <SkillBox skill="React" />
            <SkillBox skill="Redux" />
            <SkillBox skill="Express" />
            <SkillBox skill="Node" />
            <SkillBox skill="MongoDB" />
            <SkillBox skill="Cypress" />
        </div>
      </section>
    </>
}
