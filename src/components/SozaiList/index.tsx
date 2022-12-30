import Sozai from 'src/components/Sozai';
import styles from 'src/components/SozaiList/SozaiList.module.css';

export default function SozaiList(props) {
  return (
    <div className={styles.sozaiList}>
      { props.sozais.map((sozai, index) => {
          return <Sozai sozai={sozai} index={index} key={sozai.id} />
      })}
    </div>
  );
}
