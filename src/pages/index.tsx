import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import styles from 'src/styles/Home.module.css'
import Headline from 'src/components/Headline'
import SozaiList from 'src/components/SozaiList'
import Footer from 'src/components/Footer'

export type Sozai = {
  id: String
  file_name: String
}
export default function Home(data) {
  return (
    <div className={styles.container}>
      <Headline />
      <SozaiList sozais={data.sozais} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const yamlPath = path.join(process.cwd(), 'src', 'data', 'images.yml')
  const sozais: Sozai[] = yaml.load(fs.readFileSync(yamlPath, 'utf-8')) as Sozai[]

  return {
    props: { sozais }
  }
}
