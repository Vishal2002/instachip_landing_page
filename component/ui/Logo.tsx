import Image from 'next/image';

const Logo = () => {
  return (
    <a href="#" className="flex items-center">
      <Image
        src="https://www.getinstachip.com/images/logo-p-500.png"
        width={32}
        height={32}
        className="mr-3 rounded-full border-2 border-white"
        alt="Instachip Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Instachip</span>
    </a>
  );
};

export default Logo;
