import styles from "../../styles/MainHeader.module.css";
import { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function MainHeader() {
  const [session, loading] = useSession();
  const router = useRouter();
  const [show, setShow] = useState(false);
  function logoutHandler() {
    signOut();
  }
  function toggleShow() {
    setShow(!show);
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__group}>
            <div>
              <Link href="/">
                <svg
                  version="1.1"
                  viewBox="0 0 50 50"
                  className={styles.header__logopc}
                  id="logo-pc"
                >
                  <path
                    pid="0"
                    d="M25.093 0c13.781.06 24.94 11.317 24.882 25.106C49.917 38.894 38.663 50.058 24.88 50 11.1 49.942-.059 38.683.001 24.894.057 11.106 11.31-.058 25.092 0zm11.801 31.9L14.398 16.053c.241-.26.48-.518.74-.777 2.7-2.687 5.971-4.031 9.775-4.015 3.804.015 7.064 1.388 9.741 4.098.238.241.476.482.694.743l-5.951 4.133 2.381 1.688 5.153-3.576v.02L39.33 16.7c-.692-1.203-1.584-2.325-2.616-3.39-3.231-3.292-7.167-4.947-11.788-4.967-4.6-.019-8.53 1.603-11.809 4.867a17.806 17.806 0 00-2.682 3.408l1.429 1.004 23.429 16.51c-.24.26-.48.518-.74.777-2.7 2.687-5.971 4.011-9.775 3.996-3.803-.016-7.063-1.37-9.74-4.08-.258-.26-.496-.521-.734-.782l6.111-4.251-.139-.181-2.183-1.528-5.373 3.735v-.021l-2.377 1.65a17.824 17.824 0 002.654 3.43c3.253 3.291 7.169 4.946 11.769 4.965 4.62.021 8.549-1.602 11.83-4.866 1.06-1.075 1.96-2.21 2.682-3.406l-2.383-1.67z"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className={styles.header__flex}>
              <div className={styles.searchbox}>
                <svg
                  version="1.1"
                  viewBox="0 0 15 15"
                  width="14px"
                  height="14px"
                >
                  <g stroke="#919191" strokeWidth="2" fill="none">
                    <path pid="0" d="M10 10l4 4"></path>
                    <circle pid="1" cx="6.5" cy="6.5" r="5.5"></circle>
                  </g>
                </svg>
                <div className={styles.booking__input}>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Tìm kiếm"
                    id="search-input"
                    className={styles.booking__inputtext}
                  />
                </div>
              </div>

              <div className={styles.datebox}>
                <svg
                  version="1.1"
                  viewBox="0 0 14 16"
                  width="14px"
                  height="16px"
                >
                  <path
                    pid="0"
                    d="M9 2V1a1 1 0 112 0v1a3 3 0 013 3v8a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3V1a1 1 0 112 0v1h4zM2 7v6a1 1 0 001 1h8a1 1 0 001-1V7H2z"
                    fill="#666"
                  ></path>
                </svg>
                <button id="trigger-date-range" className={styles.btn}>
                  Ngày
                </button>
              </div>

              <div className={styles.guestbox}>
                <svg
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="14px"
                  height="14px"
                >
                  <path
                    pid="0"
                    d="M8 8a4 4 0 110-8 4 4 0 010 8zm0 1c4.926 0 7.59 1.966 7.995 5.898A1.002 1.002 0 0114.994 16H1.006a1.003 1.003 0 01-1-1.102C.408 10.966 3.073 9 8 9z"
                    fill="#666"
                  ></path>
                </svg>
                <button id="trigger-date-range" className={styles.btn}>
                  Số Khách
                </button>
              </div>
              <button
                type="button"
                id="search-btn"
                className={styles.booking__btn}
              >
                <svg
                  version="1.1"
                  viewBox="0 0 15 15"
                  width="14px"
                  height="14px"
                >
                  <g stroke="#FFF" strokeWidth="2" fill="none">
                    <path pid="0" d="M10 10l4 4"></path>
                    <circle pid="1" cx="6.5" cy="6.5" r="5.5"></circle>
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <a href="#" rel="nofollow">
                Guide
              </a>
            </li>
            <li className={styles.menu__item}>
              <a href="#" rel="nofollow">
                Host
              </a>
            </li>
            {!session && !loading && (
              <li className={styles.menu__item}>
                <Link href="/auth" rel="nofollow">
                  Đăng Nhập
                </Link>
              </li>
            )}
            {session && (
              <li className={styles.menu__item}>
                <button
                  onClick={logoutHandler}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Đăng xuất
                </button>
              </li>
            )}
          </ul>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="30px"
          className={styles.menumobile}
          onClick={toggleShow}
        >
          <path d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <span
          className={`${styles.nav_overlay} ${show ? styles.showoverlay : ""}`}
        ></span>
        <div
          className={`${styles.nav__mobile} ${
            show ? styles.shownav__mobile : ""
          }`}
        >
          <div className={styles.nav__mobileclose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="35px"
              onClick={toggleShow}
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <ul className={styles.nav__mobilelist}>
            <li className={styles.nav__mobileitem}>
              <a href="" className={styles.nav__mobilelink}>
                Guide
              </a>
            </li>
            <li className={styles.nav__mobileitem}>
              <a href="" className={styles.nav__mobilelink}>
                Host
              </a>
            </li>
            <li className={styles.nav__mobileitem}>
              <a href="" className={styles.nav__mobilelink}>
                Đăng ký
              </a>
            </li>
            <li className={styles.nav__mobileitem}>
              <a href="" className={styles.nav__mobilelink}>
                Đăng nhập
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
