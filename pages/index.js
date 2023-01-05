import React from "react";
import styles from "../styles/Home.module.css";

function getMeliDomain(site) {
  return site.includes('com.br') ? 'mercadolivre' : 'mercadolibre'
}

export default function Home() {
  const [site, setSite] = React.useState("com.br");
  const [scope, setScope] = React.useState("beta");
  const [engine, setEngine] = React.useState("1");
  const [platform, setPlatform] = React.useState("mercadopago");
  const [path, setPath] = React.useState("/tools/create");
  const deeplink = `${platform}://webview/?webkit-engine=${engine}&hides_bottom_bar=true&use_web_title=false&url=${encodeURIComponent(
    `https://${scope}.${platform === 'mercadopago' ? platform : getMeliDomain(site)}${ scope === 'dev' ? ':8443' : ''}.${site}${path}`
  )}`;

  console.log(deeplink);

  return (
    <div className={styles.container}>
      <a className="link" href={deeplink}>
        Acessar Deeplink
      </a>
      <hr />
      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="mercadopago">MP</option>
        <option value="meli">ML</option>
      </select>
      <hr />
      <select value={path} onChange={(e) => setPath(e.target.value)}>
        <option value="/tools/create">/tools/create</option>
        <option value="/tools/list">/tools/list</option>
        <option value="/link-in-bio/bio/editor">/link-in-bio/bio/editor</option>
        <option value="/link-in-bio/bio/onboarding">/link-in-bio/bio/onboarding</option>
      </select>
      <hr />
      <select value={site} onChange={(e) => setSite(e.target.value)}>
        <option value="com.br">MLB</option>
        <option value="com.ar">MLA</option>
        <option value="com.mx">MLM</option>
        <option value="com.co">MCO</option>
        <option value="cl">MLC</option>
        <option value="com.uy">MLU</option>
        <option value="com.pe">MPE</option>
      </select>
      <hr />
      <select value={scope} onChange={(e) => setScope(e.target.value)}>
       <option value="dev">Dev</option>
        <option value="beta">Beta</option>
        <option value="omega">Omega</option>
        <option value="alpha">Alpha</option>
      </select>
      <hr />
      <select value={engine} onChange={(e) => setEngine(e.target.value)}>
        <option value="1">Webkit 1</option>
        <option value="2">Webkit 2</option>
      </select>
      <hr />
    </div>
  );
}
