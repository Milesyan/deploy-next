import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      JUST TO TEST DEPLOYMENT
      <div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
      <Image
        placeholder="blur"
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        src="https://otterapp-assets-frontend-bucket.oss-cn-shanghai.aliyuncs.com/remote-content/3d858837-2333-47f6-9fb3-e180bb382fe9.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <footer>footter</footer>
    </main>
  );
}
