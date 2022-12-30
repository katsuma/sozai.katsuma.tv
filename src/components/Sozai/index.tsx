import Image from 'next/image'
import styles from 'src/components/Sozai/Sozai.module.css'

export default function Sozai(props) {
  const imageSrc = `/images/${props.sozai.file_name}`
  const priority = props.index == 0 ? true : false
  return (
    <section className={styles.sozai}>
      <figure className={styles.figure}>
        <Image
          className={styles.image}
          alt={props.sozai.id}
          src={imageSrc}
          priority={priority}
          sizes="(max-width: 800px) 88vw, (max-width: 1200px) 600px, 50vw"
          fill
        />
        <h2>{props.sozai.id}</h2>
      </figure>
    </section>
  );
}
