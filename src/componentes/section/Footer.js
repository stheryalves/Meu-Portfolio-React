import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer} >
            <ul>
                <li> <a href='https://www.instagram.com/depoissumiu/' ><FaInstagram size={30} /></a> </li>
                <li> <a href='https://github.com/stherystyll' ><FaGithub size={30} /></a> </li>
                <li> <a href='https://www.linkedin.com/in/sthery-alves-5214ab99/'><FaLinkedin size={30}/></a> </li>
            </ul>
            <p>torressthery@gmail.com</p>
            <p>Sthery Torres © 2024</p>
        </div>
    )
}

export default Footer