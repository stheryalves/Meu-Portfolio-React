import styles from './Skills.module.css'
import javascript from '../../Image/skills/javascript.svg'
import css from '../../Image/skills/css.svg'
import html from '../../Image/skills/html.svg'
import react from '../../Image/skills/react.svg'
import python from '../../Image/skills/python.png'

function Skills() {
    return (
        <div className={styles.skill} id="Skills" >
            <h1> Habilidades </h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={css}/>
                <img src={html}/>
                <img src={react}/>
                <img src={python}/>
            </div>
        </div>
    )
}

export default Skills