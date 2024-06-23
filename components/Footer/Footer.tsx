import Link from "next/link";
import styles from "./Footer.module.css";
import { Button } from "../Button/Button";
import IconPhoneFlip from "../icons/Footer/ContactIcons";
import IconBoxSeam from "../icons/Footer/ProductsIoons";
import { IconIconHome } from "../icons/Footer/HomeIcon";
import IconCardOutline from "../icons/Footer/BuyIcon";
import { useLocale, useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");
  const localActive = useLocale();

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container-item"]}>
        <div className={styles["footer__container"]}>
          <p className={styles["title__footer"]}>© 2024 Virginia Martinez</p>
          <p className={styles["text__footer"]}>
            {t("info.page")}
            <Link
              href="https://www.4life.com/12315890"
              target="_blanc"
              className={styles["footer__link"]}
            >
              https://4life.com
            </Link>
          </p>
          <p className={styles["footer__paragraph"]}>{t("info.description")}</p>
        </div>

        <div className={styles["footer__items"]}>
          <div className={styles["footer__content--items"]}>
            <Link href="/" className={styles["footer__link"]}>
              <div className={styles["footer__items--header"]}>
                <IconIconHome />
                <p>{t("items.home")}</p>
              </div>
            </Link>
            <Link href={"/es/products"} className={styles["footer__link"]}>
              <div className={styles["footer__items--header"]}>
                <IconBoxSeam />
                <p>{t("items.products")}</p>
              </div>
            </Link>
            <Link href={"/#about"} className={styles["footer__link"]}>
              <div className={styles["footer__items--header"]}>
                <IconCardOutline />
                <p>{t("items.buy")}</p>
              </div>
            </Link>
            <Link href={"/#contact"} className={styles["footer__link"]}>
              <div className={styles["footer__items--header"]}>
                <IconPhoneFlip /> <p>{t("items.contact")}</p>
              </div>
            </Link>
          </div>
          <div className={styles["footer__button--items"]}>
            <Link href={`${localActive}/login`}>
              <Button className={styles["footer__button-login--items"]}>
                {t("button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
