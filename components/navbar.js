import { useRouter } from "next/router";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <Link href="/">Anasayfa</Link>
      <Link href="/learn">Eğitimler</Link>
    </div>
  );
}

const Link = ({ children, href }) => {
  const router = useRouter();
  return (
    <a
      className={styles.link}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </a>
  );
};
