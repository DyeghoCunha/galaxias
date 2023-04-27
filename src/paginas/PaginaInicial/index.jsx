import banner from './banner.png'
import banner2 from './fundoSW.png'
import banner3 from './fundoSW2.png'
import styles from './PaginaInicial.module.scss'

import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Menu from "componentes/Menu";
import Populares from "componentes/Populares";
import Rodape from "componentes/Rodape";

export default function PaginaInicial() {
  return (
    <section className={styles.fundo}>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A Galeria mais completa do espaco</h1>
            <img src={banner3} alt=" Imagem da terra vista do espaco" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>

      <Rodape />
    </section>
  )
}