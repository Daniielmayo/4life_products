"use client";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import IconPhoneFlip from "../icons/Home/PhoneIcon";
import IconPaperPlane from "../icons/Home/PlanetIcon";
import IconSecurity from "../icons/Home/SecurityIcon";
import styles from "./Home.module.css";
import { getProducts } from "@/services/products/getProducts";
import { Products } from "@/types/products.type";
import { useAppDispatch } from "@/store/store";
import { allProducts } from "@/store/slices/productsSlice";
import { CardProduct } from "../Card/Card";
import Link from "next/link";
import IconBagCheck from "../icons/Home/BuyICons";
import { useSession } from "next-auth/react";
import ButtonWsp from "../ButtonWsp/ButtonWsp";
import { useLocale, useTranslations } from "next-intl";

export const Home = () => {
  const dispatch = useAppDispatch();

  const [products, setProducts] = useState<Products[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        dispatch(allProducts(productsData));
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, [dispatch, session]);

  const t = useTranslations("Home");
  const localActive = useLocale();

  return (
    <section className={styles["homePage"]}>
      <div className={styles["home__image--banner"]}></div>

      <div className={styles["home__content--benefits"]}>
        <div className={styles["home__card--benefits"]}>
          <div className={styles["home__card-image--benefits"]}>
            <IconPaperPlane className={styles["home__icon-card--benefits"]} />
          </div>
          <h3 className={styles["home__title-card--benefits"]}>
            {t("benefits.benefits1.title1")}
            <br />
            {t("benefits.benefits1.title2")}
          </h3>
          <p></p>
        </div>
        <div className={styles["home__card--benefits"]}>
          <div className={styles["home__card-image--benefits"]}>
            <IconBagCheck className={styles["home__icon-card--benefits"]} />
          </div>
          <h3 className={styles["home__title-card--benefits"]}>
            {t("benefits.benefits2.title")}
          </h3>
          <p></p>
        </div>
        <div className={styles["home__card--benefits"]}>
          <div className={styles["home__card-image--benefits"]}>
            <IconSecurity className={styles["home__icon-card--benefits"]} />
          </div>
          <h3 className={styles["home__title-card--benefits"]}>
            {t("benefits.benefits3.title")}
          </h3>
          <p></p>
        </div>
        <div className={styles["home__card--benefits"]}>
          <div className={styles["home__card-image--benefits"]}>
            <IconPhoneFlip className={styles["home__icon-card--benefits"]} />
          </div>
          <h3 className={styles["home__title-card--benefits"]}>
            {" "}
            {t("benefits.benefits4.title")}
          </h3>
          <p></p>
        </div>
      </div>

      <div className={styles["home__container--product"]}>
        <div className={styles["home__content-image--product"]}>
          <img
            src="/home/product.webp"
            alt="product"
            className={styles["home__image--product"]}
          />
        </div>
        <div className={styles["home__content-info--product"]}>
          <h2 className={styles["home__title--product"]}>
            {t("flagshipProductHome.title")}
            <span> Plus</span>
          </h2>
          <p className={styles["home__description--product"]}>
            {t("flagshipProductHome.decription")}
          </p>
          <div className={styles["home__content-price--product"]}>
            <p className={styles["home__price--product"]}>$ 65.00 </p>
            <Link
              href={
                "https://www.4life.com/12315890/product/transfer-factor-plus-tri-factor/89"
              }
              target="_blank"
            >
              <Button className={styles["home__button--product"]}>
                {t("flagshipProductHome.button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles["home__container--featuredProduct"]}>
        <h2 className={styles["home__title--featuredProduct"]}>
          {t("SectionProductsHome.title")}
        </h2>
        <div></div>
        <div className={styles["home__content-card--featuredProduct"]}>
          {products.slice(0, 6).map((product, index) => (
            <CardProduct
              src={product.imageProduct}
              title={product.nameProduct}
              price={product.price}
              description={product.descriptionProduct}
              link4lifeProduct={product.link4lifeProduct}
              key={index}
            />
          ))}
        </div>
        <div className={styles["home__content-button--featuredProduct"]}>
          <Link
            href={`/${localActive}/products`}
            className={styles["home__button--featuredProduct"]}
          >
            <Button className={styles["button--featuredProduct"]}>
              {t("SectionProductsHome.button")}
            </Button>
          </Link>
        </div>
      </div>
      <div id="buy" className={styles["home__container--buy"]}>
        <h2 className={styles["home__title--buy"]}>
          {t("buyingIsEasy.title")}
        </h2>
        <div className={styles["home__content-buy"]}>
          <div className={styles["home__content-step--buy"]}>
            <img
              src="/home/selectProduct.svg"
              alt=""
              className={styles["home__image-step--buy"]}
            />
            <div className={styles["home__content-info--buy"]}>
              <h2 className={styles["home__title-step--buy"]}>
                {t("buyingIsEasy.steps.step1.title")}
              </h2>
              <p className={styles["home__paragraph--buy"]}>
                {t("buyingIsEasy.steps.step1.description1")}
                <Link
                  href={`/${localActive}/products`}
                  className={styles["home__paragraph-link--buy"]}
                >
                  {" "}
                  {t("buyingIsEasy.steps.step1.description1link")}
                </Link>{" "}
                {t("buyingIsEasy.steps.step1.description1end")}
              </p>
            </div>
          </div>
          <div className={styles["home__content-step--buy"]}>
            <img
              src="/home/addcart.svg"
              alt=""
              className={styles["home__image-step--buy"]}
            />
            <div className={styles["home__content-info--buy"]}>
              <h2 className={styles["home__title-step--buy"]}>
                {t("buyingIsEasy.steps.step2.title")}
              </h2>
              <p className={styles["home__paragraph--buy"]}>
                {t("buyingIsEasy.steps.step2.description")}
              </p>
            </div>
          </div>
          <div className={styles["home__content-step--buy"]}>
            <img
              src="/home/pay.svg"
              alt=""
              className={styles["home__image-step--buy"]}
            />
            <div className={styles["home__content-info--buy"]}>
              <h2 className={styles["home__title-step--buy"]}>
                {t("buyingIsEasy.steps.step3.title")}
              </h2>
              <p className={styles["home__paragraph--buy"]}>
                {t("buyingIsEasy.steps.step3.description")}
              </p>
            </div>
          </div>
          <div className={styles["home__content-step--buy"]}>
            <img
              src="/home/box.svg"
              alt=""
              className={styles["home__image-step--buy"]}
            />
            <div className={styles["home__content-info--buy"]}>
              <h2 className={styles["home__title-step--buy"]}>
                {t("buyingIsEasy.steps.step3.title")}
              </h2>
              <p className={styles["home__paragraph--buy"]}>
                {t("buyingIsEasy.steps.step4.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["home___container--about"]} id="about">
        <img
          src="/home/about.svg"
          alt="about"
          className={styles["home__image--about"]}
        />
        <div className={styles["home__content-info--about"]}>
          <h2 className={styles["home__title--about"]}>{t("aboutMe.title")}</h2>
          <p className={styles["home__paragraph--about"]}>
            {t("aboutMe.description")}
          </p>
        </div>
      </div>
      <div className={styles["home___container--contactMe"]} id="contact">
        <img
          src="/home/contactMe.svg"
          alt="contact me"
          className={styles["home__image--contactMe"]}
        />
        <div className={styles["home__content-info--contactMe"]}>
          <h2 className={styles["home__title--contactMe"]}>
            {t("contactMe.title")}
          </h2>
          <p className={styles["home__paragraph--contactMe"]}>
            <span className={`${styles["textItalic"]} ${styles["textBold"]}`}>
              {t("contactMe.descriptionBold")}
            </span>
            {t("contactMe.description")}
          </p>
          <ButtonWsp />
        </div>
      </div>
    </section>
  );
};
