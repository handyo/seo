import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeadMeta from "../component/HeadMeta";

export default function Home() {
    return (
        <div className={styles.container}>
            <HeadMeta title="메인" keyword="메인키워드" description="설명글 메인" url="www.valofe.com"
                      img_fb="https://file.valofe.com/Valofe_file/web/at/ko/images/landing/sae/fb_1200_630-min.png"/>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    수정확인asdasd<a href="https://nextjs.org">Next.js!</a>
                </h1>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}
