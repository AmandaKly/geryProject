import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaDiscord /></li>
            </ul>
            <p className={styles.copy_rigth}>
                <span>GeryProject</span> &copy; 2024
            </p>
        </footer>
    )
}

export default Footer