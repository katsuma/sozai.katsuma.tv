import styles from 'src/components/Footer/Footer.module.css';
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = (new Date()).getFullYear()
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/katsuma/sozai.katsuma.tv/" aria-label="Contribnute on GitHub" className={styles.icon}>
        <FaGithub />
      </a>

      <p>© 2014-{currentYear}
      &nbsp;
      <a href="https://katsuma.tv">Ryo Katsuma</a>
      </p>
    </footer>
  )
}
