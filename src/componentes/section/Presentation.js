import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation() {
    return (
        <div className={styles.presentation} id="Presentation" >
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou a Sthery </h1>
            <p>
                Sou apaixonada por tecnologia e soluções inovadoras. Com uma sólida <br />
                formação em  desenvolvimento web pela escola Dinâmica, constantemente <br />
                busco aprimorar minhas habilidades e enfrentar novos desafios <br />
                Acredito na importância de aprender continuamente e acompanhar <br />
                as últimas tendências tecnológicas.
            </p>
            <ButtonA link='https://github.com/stherystyll' text='Conecte-se comigo!!' />

        </div>
    )
}

export default Presentation