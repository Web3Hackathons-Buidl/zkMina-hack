'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import heroMinaLogo from '@/public/assets/hero-mina-logo.svg';
import Link from 'next/link';
// import { Shield } from '@/03-deploying-to-a-live-network/build/src/build.json';

export default function Home() {
  useEffect(() => {
    (async () => {
      const { Mina, PublicKey } = await import('o1js');
      // const { Shield } = await import('@/zkApp/zkShield/03-deploying-to-a-live-network/build/src);

      // Update this to use the address (public key) for your zkApp account.
      // To try it out, you can try this address for an example "Add" smart contract that we've deployed to
      // Berkeley Testnet B62qqbrUtddZv8iU7YjDvRXhfkr23fWEL6BZPQSLUUT1kedvjvVwuas.
      const zkAppAddress =
        '5Jtoqoe8pWjKSpfrCy6Jeqe99PZxuCUMKqWwXK99AYM8ywzz4BzY';
      // This should be removed once the zkAppAddress is updated.
      if (!zkAppAddress) {
        console.error(
          'The following error is caused because the zkAppAddress has an empty string as the public key. Update the zkAppAddress with the public key for your zkApp account, or try this address for an example "Add" smart contract that we deployed to Berkeley Testnet: B62qkwohsqTBPsvhYE8cPZSpzJMgoKn4i1LQRuBAtVXWpaT4dgH6WoA'
        );
      }
      const zkApp = new Shield(PublicKey.fromBase58(zkAppAddress));
    })();
  }, []);

  return (
    // <>
    //   <Head>
    //     <title>Mina zkApp UI</title>
    //     <meta name="description" content="built with o1js" />
    //     <link rel="icon" href="/assets/favicon.ico" />
    //   </Head>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          // src="/public/assets/hero-mina-logo.svg"
          src={heroMinaLogo}
          alt="Mina Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <p>Deployed a zkApp to Berkeley Testnet: </p>
      <Link href="https://minascan.io/berkeley/tx/5Jtoqoe8pWjKSpfrCy6Jeqe99PZxuCUMKqWwXK99AYM8ywzz4BzY?type=zk-tx">
        Deployed Shield Contract
      </Link>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
      <p>built with o1js</p>
    </main>
  );
}
