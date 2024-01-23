import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'


function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['a Sthery!', 'Desenvolvedora Front End.'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }

    return (
        <div className={styles.presentation} id="Presentation" >
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text} </h1>
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