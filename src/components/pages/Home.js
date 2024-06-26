import styles from './Home.module.css'
import contrato from '../img/contrato.png'
import LinkButton from '../layout/LinkButton'

function Home () {
    return (
        <section className={styles.home_container}>
            <h1> Bem-vindo ao <span> GeryProject! </span></h1>
            <p> Comece a gerenciar os seus projetos agora mesmo! </p>
            <LinkButton to="novoProjeto" text="Criar Projeto"/>
            <img src={contrato} alt='Gerenciamento'></img>
        </section>

    )
}

export default Home