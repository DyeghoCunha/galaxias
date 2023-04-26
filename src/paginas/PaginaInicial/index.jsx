import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A Galeria mais completa do espaco</h1>
            <img src={banner} alt=" Imagem da terra vista do espaco" />
          </div>

        </section>

      </main>
    </>
  )
}