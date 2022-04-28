import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const deeplinkBeta = `mercadopago://webview/?url=${encodeURIComponent(
    "https://beta.mercadopago.com.br/tools/list&navigation_icon=boton-tulink"
  )}&hides_bottom_bar=true&navigation_icon=boton-tulink&use_web_title=false`;
  const deeplinkOmega = `mercadopago://webview/?url=${encodeURIComponent(
    "https://omega.mercadopago.com.br/tools/list&navigation_icon=boton-tulink"
  )}&hides_bottom_bar=true&navigation_icon=boton-tulink&use_web_title=false`;
  return (
    <div className={styles.container}>
      <h1>Link de pago + Quick Link</h1>
      <button href={deeplinkOmega}>Link Omega</button>
      <button href={deeplinkBeta}>Link Beta</button>
    </div>
  );
}
