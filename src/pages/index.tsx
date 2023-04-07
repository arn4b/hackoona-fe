import Image from 'next/image'
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className="flex w-9/12 min-h-screen flex-col items-center p-24 font-mono mx-auto">
        <span className='text-6xl'>
          Incentinator
        </span>
      </div>
    </Layout>
  )
}
