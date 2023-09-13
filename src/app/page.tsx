'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const {isLoading, user} = useUser()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="">
        <h1 className='text-center font-bold text-3xl'>Bienvenido a <span className='text-blue-600'>🚌SUBI carga</span></h1>
        <p></p>
        </header>

        {isLoading?  <p className='mt-4 text-3xl font-bold'>⌛ Cargando...</p>
        :  
        <main>
          { user? (
            <Link href={'/perfil'} className='bg-blue-600 text-white rounded-md px-4 py-2'>
              Ir a mi perfil</Link>
            )
            : (
            <nav>
              <ul className='flex justify-between gap-10'>
                <li className='border rounded-3xl p-3 bg-blue-600 text-white'><Link href={'/api/auth/login'}>Ingresar</Link></li>
                <li className='border rounded-3xl p-3 border-blue-600'><Link href={'/api/auth/signup'}>Registrarse</Link></li>
              </ul>
            </nav>
            )    
            }
        </main>
      }

        
    </main>
  )
}
