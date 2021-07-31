import React from 'react'
import Head from 'next/head';

export default function Layout({title, children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="skpjr001" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting . You can buy me a coffee." data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="40"></script>

        {/*<!-- Primary Meta Tags -->*/}
        <meta name="title" content="Meta Generator - Website Meta Tag Checker and Generator"/>
        <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.site/"/>
        <meta property="og:title" content="Meta Generator - Website Meta Tag Checker and Generator"/>
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
        <meta property="og:image" content="/metatags1.png"/>

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.site/"/>
        <meta property="twitter:title" content="Meta Generator - Website Meta Tag Checker and Generator"/>
        <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
        <meta property="twitter:image" content="/metatags1.png"/>
      </Head>
      <main className="min-h-screen">
        {children}
      </main>
    </>
  )
}
