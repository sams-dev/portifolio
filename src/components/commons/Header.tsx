import Image from "next/image";
import Link from "next/link";
import {Roboto} from 'next/font/google';

const roboto = Roboto ({
  subsets: ['latin'],
  weight: '500',
});
export const Header = () => {
    return (
        <header className={`${roboto.className}` }>
          <Link href='/'>
            <Image src="/Sd.png" width={50} height={50} alt="icone da samsdev" />
          </Link>
          <nav>
            <Link href='/'>Sobre mim</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/contatos'>Entre em contato</Link>
          </nav>
        </header>
    );
}