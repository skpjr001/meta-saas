import React from 'react'
import Head from 'next/head';

export default function Layout({title, children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="skpjr001" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting . You can buy me a coffee." data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="40"></script>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <main className="min-h-screen">
        {children}
      </main>
    </>
  )
}
