import Image from "next/image";
import Topbar from "../components/layout/Topbar";
import Menu from "../components/layout/Menu";
import LeftContent from "../components/home/LeftContent";

export default function Home() {
  return (
    <div className="bg-background font-(--font-figtree)">
      <header className="flex flex-col gap-4 mb-7 xl:gap-(--spacing-35px) xl:mb-(--spacing-57px)">
        <Topbar />
        <Menu />
      </header>
      <main className="flex flex-col relative">
        <section className="max-w-(--w-1018) w-full h-full mx-auto flex flex-col-reverse items-center relative xl:flex-row">
          <LeftContent />
          <Image
            src="/hero_image.svg"
            alt="Fame tonic Hero image"
            width={666}
            height={679}
            className="xl:absolute right-(--spacing-11p)"
          />
        </section>
      </main>
    </div>
  );
}
