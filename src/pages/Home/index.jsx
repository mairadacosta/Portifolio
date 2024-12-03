import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'
import Maira from '../../assets/avatar.svg'

function Home() {
    return (
       <>
        
          <Container>
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
              Olá, sou <br />
              <span>Maira da Costa</span> <br />
              Dev Web
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
          </Link>
      </div>
      <figure>
          <img className={styles.img_home} src={Maira} alt="Imagem de Home" />
      </figure>
  </section>
</Container>

        </> 
    )
}

export default Home
