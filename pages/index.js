import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [site, setSite] = React.useState("com.br");
  const [scope, setScope] = React.useState("beta");
  const [engine, setEngine] = React.useState("1");
  const deeplink = `mercadopago://webview/?webkit-engine=${engine}&url=${encodeURIComponent(
    `https://${scope}.mercadopago.${site}/tools/${ ['com.mx','com.ar'].includes(site) ? 'create' : 'list'}`
  )}&hides_bottom_bar=true&${engine === '1' ? 'navigation_icon' :'bar_right_button_icon'}=boton-tulink&use_web_title=false`;

  console.log(deeplink);

  return (
    <div className={styles.container}>
      <a className="link" href={deeplink}>
        Deeplink
      </a>
      <hr />
      <select onChange={(e) => setSite(e.target.value)}>
        <option value="com.br">MLB</option>
        <option value="com.ar">MLA</option>
        <option value="com.mx">MLM</option>
        <option value="com.co">MCO</option>
        <option value="cl">MLC</option>
        <option value="com.uy">MLU</option>
        <option value="com.pe">MPE</option>
      </select>
      <hr />
      <select onChange={(e) => setScope(e.target.value)}>
        <option value="beta">Beta</option>
        <option value="omega">Omega</option>
        <option value="alpha">Alpha</option>
      </select>
      <hr />
      <select onChange={(e) => setEngine(e.target.value)}>
        <option value="1">Webkit 1</option>
        <option value="2">Webkit 2</option>
      </select>
    </div>
  );
}
