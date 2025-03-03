import Image from "next/image";

function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full">
        {/* <Image
          src={"/images/midground.png"}
          alt="testing"
          width={500}
          height={700}
        /> */}
        <h1 className="text-3xl">Octo 2.0 landing page</h1>
      </div>
    </div>
  );
}

export default Home;
