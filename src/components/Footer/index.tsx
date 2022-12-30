import styles from 'src/components/Footer/Footer.module.css';

export default function Footer() {
  const currentYear = (new Date()).getFullYear()
  return (
    <footer className={styles.footer}>
      <p>© 2014-{currentYear}
      &nbsp;
      <a href="https://katsuma.tv">Ryo Katsuma</a>
      </p>
    </footer>
  )
}
