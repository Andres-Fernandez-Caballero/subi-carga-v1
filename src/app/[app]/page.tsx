'use client';
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";

const PerfilPage = () => {
    const {user, isLoading} = useUser()
    return(
        <>    
        {isLoading? (<p>Cargando...</p>) : 
        (
            <div>
                <h1>Perfil</h1>
                <blockquote>
                    ´<p>usuario {user?.name}</p>
                    <p>email: {user?.email}</p>
                    <Image src={user?.picture ?? 'default.jpg'} alt='avatar' width={200} height={200}/>
                </blockquote>
                <Link href={'/api/auth/logout'}>Cerrar sesión</Link>
            </div>
        )}
        </>
    )
}

export default PerfilPage;