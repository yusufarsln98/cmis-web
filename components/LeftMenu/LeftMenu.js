import styles from "./LeftMenu.module.scss";
import Link from "next/link";
import { AuthContext } from 'pages/_app';
import React from 'react';

export default function LeftMenu() {
    const authContext = React.useContext(AuthContext);
    return (
        <ul className={styles.left}>
            {authContext.userData ? (
                <li className={styles.item} onClick={() => authContext.signOut()}>
                  <img src={'/icons/sidebar-sign-in.svg'} alt='cikis' style={{transform: 'rotate(180deg)'}} />
                  <a>Çıkış Yap</a>
                </li>
            ) : (
                <li className={styles.item} onClick={() => authContext.setIsLoginOpen(true)}>
                  <img src={'/icons/sidebar-sign-in.svg'} alt='giris-yap' />
                  <a>Giriş Yap</a>
                </li>
            )}
            {authContext.userData ? (
                <li className={styles.item}>
                  <Link href={'/ogrenciler/' + authContext.userData.id + "/kaydedilenler"}>
                      <img src={'/icons/sidebar-bookmark.svg'} alt='kaydedilenler' />
                  </Link>
                  <Link href={'/ogrenciler/' + authContext.userData.id + "/kaydedilenler"}>Kaydedilenler</Link>
                </li>
            ) : (
                <li className={styles.item} onClick={() => authContext.setIsSignUpOpen(true)}>
                  <img src={'/icons/sidebar-sign-up.svg'} alt='kayit-ol' />
                  <a>Kayıt Ol</a>
                </li>
            )}
            <li className={styles.item}>
              <Link href={'/yaklasan-etkinlikler'}>
                  <img src={'/icons/sidebar-events.svg'} alt='yaklasan-etkinlikler' />
              </Link>
              <Link href={'/yaklasan-etkinlikler'}>
                Etkinlikler
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={'/topluluklar'}>
                  <img src={'/icons/sidebar-communities.svg'} alt='topluluklar/takimlar' />
              </Link>
              <Link href={'/topluluklar'}>
                Topluluklar/Takımlar
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={'/askida-proje'}>
                  <img src={'/icons/sidebar-project-idea.svg'} alt='yaklasan-etkinlikler' />
              </Link>
              <Link href={'/askida-proje'}>
                Askıda Proje
              </Link>
            </li>
        </ul>
    );
  }