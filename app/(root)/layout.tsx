import React from 'react'
import Header from '@/components/shared/header'
import Footer from '@/components/footer'
type RootProps = {
    readonly children: React.ReactNode
}

const RootLayout = ({children}:RootProps) => {
  return (
    <div className='flex h-screen flex-col'>
        <Header/>
        <main className='flex-1 wrapper'>{children}</main>
        <Footer/>
    </div>
  )
}
    
export default RootLayout