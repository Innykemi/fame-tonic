import Image from "next/image";

export default function Menu() {
  return (
    <nav
      className="relative w-full mx-auto flex items-start z-10 justify-end md:justify-between max-md:pr-(--spacing-29px) max-xl:px-10 xl:max-w-(--w-1018)"
      aria-label="Main Navigation"
    >
      <div className="max-md:absolute max-md left-1/2 max-md:transform max-md:-translate-x-1/2">
        <Image
          src="/logo.svg"
          alt="Fame tonic logo"
          width={107.78}
          height={46.07}
          priority
          className="h-(--h-46px) md:w-(--w-173px) md:h-(--h-74px)"
        />
      </div>
      <ul className="hidden items-center gap-10 md:flex">
        <li className="font-semibold text-lg leading-none text-gray-2">
          About us
        </li>
        <li className="font-semibold text-lg leading-none text-gray-2">
          Contact
        </li>
      </ul>
      <button aria-label="Mobile menu" className="md:hidden">
        <Image
          src="/menu.svg"
          alt="menu icon"
          width={20}
          height={20}
          className="md:hidden"
        />
      </button>
    </nav>
  );
}
