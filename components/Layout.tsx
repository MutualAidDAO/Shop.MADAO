import Head from 'next/head'
import Footer from './bottom-bar'
import Navbar from './navbar'
export default function Layout({
  children,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  const siteTitle = `Wallet Speed Testing Platform`

  return (
    <div data-theme="mytheme" className="m-0 max-w-full">
      <Head>
        <meta name="apple-mobile-web-app-title" content={siteTitle} />
        <meta name="application-name" content={siteTitle} />
        <meta
          name="description"
          content="Join the top Mutual Aid Basic Income Project"
        />
        <meta property="og:image" content="" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
