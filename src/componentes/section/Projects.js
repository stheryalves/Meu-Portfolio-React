import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import lpdesafio from '../../Image/projects/lpdesafio.jpg'

function Projects() {
    return (
        <div className={styles.projects} id="Projects" >
            <h1> Projetos </h1>
            <Card
            img={lpdnc} 
            title='LP - DNC' 
            tech='HTML, CSS e JS' 
            description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'
            repo='https://github.com/stherystyll/projeto-landing-page' 
            site='https://teste-sthery.netlify.app/'
            />
            <Card
            img={lpdesafio} 
            title='Lp - Empresa Arquitetura' 
            tech='HTML, CSS e JS' 
            description='Desenvolvimento de uma Landing Page para o empresa fictícia de Arquitetura'
            repo='https://github.com/stherystyll/Desafio1-Landing-page' 
            site='https://desafio1-sthery.netlify.app/'
            />
            
            <ButtonB text='Ver repositório completo' link='https://github.com/stherystyll?tab=repositories' />
        </div>
    )
}

export default Projects