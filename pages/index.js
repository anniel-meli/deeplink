import React from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const baseUrl = 'mercadopago://webview/?url='
  const [url, setUrl] = React.useState('https://omega.mercadopago.com.br/tools/integration')
  const [price, setPrice] = React.useState('10.0')
  const [title, setTitle] = React.useState('Camisa')
  const [source, setSource] = React.useState('point')
  const [serial, setSerial] = React.useState('0000000')
  const [callback, setCallback] = React.useState('https://deeplink-one.vercel.app/congrats')

  const openDeeplink = () => {
    const deeplink = `${baseUrl}${encodeURIComponent(`${url}?price=${price}&title=${title}&source=${source}&serial_number=${serial}&callback_url=${callback}`)}&hides_bottom_bar=true`;
    window.location = deeplink;
  }

  return (
    <div className={styles.container}>
      <label>
        URL:
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      <label>
        Price
        <input value={price} onChange={(e) => setPrice(e.target.value)}  />
      </label>
      <label>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)}  />
      </label>
      <label>
        source
        <input value={source} onChange={(e) => setSource(e.target.value)}  />
      </label>
      <label>
      serial_number
        <input value={serial} onChange={(e) => setSerial(e.target.value)}  />
      </label>
      <label>
      callback_url
        <input value={callback} onChange={(e) => setCallback(e.target.value)}  />
      </label>
      <button onClick={openDeeplink}>
        Acessar
      </button>
    </div>
  )
}
