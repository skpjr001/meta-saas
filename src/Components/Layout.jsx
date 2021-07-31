import React from 'react'
import Head from 'next/head';
import Script from 'next/script'

export default function Layout({title, children}) {
  return (
    <>
      <Script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="skpjr001" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting . You can buy me a coffee." data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="40"></Script>
      <Script src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css" />
      </Head>
      <main className="min-h-screen">
        {children}
      </main>
    </>
  )
}
