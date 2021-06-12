import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Tiny Habits</title>
      </Head>
      <div className="container mx-auto my-auto h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="text-gray-500 text-5xl text-center bg-purple-200 px-1">
            Hello World
          </div>
        </div>
      </div>
    </div>
  );
}
