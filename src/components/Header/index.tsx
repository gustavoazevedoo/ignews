import { useRouter } from 'next/router';
import Image from 'next/image';

import Logo from '/public/images/logo.svg'

import styles from './styles.module.scss'

import SignInButton from '../SignInButton';
import { ActiveLink } from '../ActiveLink';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}