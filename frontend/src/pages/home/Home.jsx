import MessagesContainer from "../../components/Messages/MessagesContainer";
import SideBar from "../../components/UsersSideBar/SideBar";

const Home = () => {
  return (
    <>
      <span className="absolute flex top-1 left-4 items-center text-blue-600 text-2xl z-20">
        Word<span className="text-yellow-400">Hive</span>
        <img
          className="mx-1"
          src="/honeycomb.png"
          alt="logo"
          width={30}
          height={30}
        />
      </span>
      <div className="flex w-full mx-5 h-[500px] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <SideBar />
        <MessagesContainer />
      </div>
    </>
  );
};

export default Home;
