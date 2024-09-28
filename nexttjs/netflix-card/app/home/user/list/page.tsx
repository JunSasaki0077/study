import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";

const getData = async (userId: string) => {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          watchLists: true,
        },
      },
    },
  });
  return data;
};

const WatchList = async () => {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);

  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your Watch list
      </h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0  mt-10 gap-6">
        {data.map((movie) => (
          <div key={movie.Movie?.id} className="relative h-60">
            <Image
              src={movie.Movie?.imageString as string}
              alt="Movie"
              className="rounded-sm absolute h-full w-full object-cover"
              width={500}
              height={400}
            />
            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
                <Image
                  src={movie.Movie?.imageString as string}
                  alt="Movie"
                  width={800}
                  height={800}
                  className="absolute w-full h-full -z-10 rounded-lg object-cover"
                />
                <MovieCard
                  movieId={movie.Movie?.id as number}
                  overview={movie.Movie?.overview as string}
                  title={movie.Movie?.title as string}
                  watchListId={movie.Movie?.watchLists[0]?.id as string}
                  youtubeUrl={movie.Movie?.youtubeString as string}
                  watchList={
                    (movie.Movie?.watchLists.length as number) > 0
                      ? true
                      : false
                  }
                  key={movie.Movie?.id}
                  age={movie.Movie?.age as number}
                  time={movie.Movie?.duration as number}
                  year={movie.Movie?.release as number}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default WatchList;
