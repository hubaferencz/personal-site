import Image from "next/image";

export default () => {
  return (
    <main className="max-w-screen-xl mx-auto text-white">
      <div className="flex flex-col h-screen p-10">
        <div className="flex flex-row h-3/5 mb-4">
          <div className="flex-grow flex flex-col mr-4 space-y-4">
            <div className="h-3/5 bg-zinc-900 rounded-3xl p-6 "></div>
            <div className="h-2/5 flex justify-between space-x-4">
              <div className="w-1/3 bg-emerald-400 rounded-3xl"></div>
              <div className="w-1/3 bg-yellow-400 rounded-3xl"></div>
              <div className="w-1/3 bg-rose-400 rounded-3xl"></div>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <div className="h-16 bg-zinc-900 rounded-3xl mb-4 px-4"></div>
            <div className="flex-grow flex justify-between">
              <div className="w-1/2 bg-zinc-900 rounded-3xl mr-4"></div>
              <div className="w-1/2 flex flex-col">
                <div className="h-20 bg-zinc-900 rounded-3xl mb-2  px-4"></div>
                <div className="flex-grow bg-zinc-900 rounded-3xl my-2"></div>

                <div className="h-20 bg-zinc-900 rounded-3xl mt-2 flex justify-between p-1">
                  <div className="w-1/4 bg-zinc-800 rounded-3xl m-1"></div>
                  <div className="w-1/4 bg-zinc-800 rounded-3xl m-1"></div>
                  <div className="w-1/4 bg-zinc-800 rounded-3xl m-1"></div>
                  <div className="w-1/4 bg-zinc-800 rounded-3xl m-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between h-2/5">
          <div className="w-7/12 bg-zinc-900 rounded-3xl mr-2 p-5">
            <h2 className="text-2xl mb-5 font-bold">Recent Projects</h2>
            <div className="w-full h-full flex justify-between gap-6">
              <div className="w-52 h-52  bg-zinc-800 rounded-3xl"></div>
              <div className="w-52 h-52 bg-zinc-800 rounded-3xl"></div>
              <div className="w-52 h-52 bg-zinc-800 rounded-3xl"></div>
            </div>
          </div>
          <div className="w-5/12 bg-zinc-900 rounded-3xl ml-2 p-6"></div>
        </div>
      </div>
    </main>
  );
};
