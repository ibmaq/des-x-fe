import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-3/4 mx-auto flex justify-center items-center flex-col gap-8">
      <main>
        <h1 className="font-bebas text-white text-49/none -tracking-5.04">
          We will keep the main divs here
        </h1>
      </main>
      <footer>
        <p className="text-white">We will keep the footer content here</p>
      </footer>
    </div>
  );
}
