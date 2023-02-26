import Head from 'next/head'
import Link from 'next/link'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { SidebarComponent } from './SidebarComponent'
import Style from '../styles/layout.module.css'

export function Layout({children}: any)
{
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="PokeNext" />
      </Head>

      <div className="flex flex-col">
        <Navbar/>
        <div className={Style.sidebar}>
          <div className="flex flex-row h-full bg-gray-900  ">
            <SidebarComponent/>
            <div className="w-full h-full flex flex-grow flex-col gap-2">
              <div className="w-full h-full overflow-auto p-2">
                {children}
              </div>
              <Footer/>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}