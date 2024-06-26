import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import Container from "./Container"
import logo from "../img/coin.png"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to='/'>
          <img className={styles.img} src={logo} alt="logo"></img>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}><Link to='/'> Início </Link></li>
          <li className={styles.item}><Link to='/projetos'> Projeto </Link></li>
          <li className={styles.item}><Link to='/empresa'> Company </Link></li>
          {/* <li className={styles.item}><Link to='/newproject'> NewProject </Link></li> */}
          <li className={styles.item}><Link to='/contato'> Contato </Link></li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar