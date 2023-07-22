import Image from "next/image";
import { DownloadButton } from "./download_button";
export const Card = () => {
  const posts = [
    {
      id: 1,
      title: "Article Title 1",
      date: "11/1/19",
      imageUrl: "https://picsum.photos/600/400/?random",
      authorName: "Author 1",
    },
    {
      id: 2,
      title: "Article Title 2",
      date: "11/2/19",
      imageUrl: "https://picsum.photos/600/400/?random",
      authorName: "Author 2",
    },
    {
      id: 3,
      title: "Article Title 2",
      date: "11/2/19",
      imageUrl: "https://picsum.photos/600/400/?random",
      authorName: "Author 2",
    },
    {
      id: 4,
      title: "Article Title 2",
      date: "11/2/19",
      imageUrl: "https://picsum.photos/600/400/?random",
      authorName: "Author 2",
    },
    {
      id: 5,
      title: "Article Title 2",
      date: "11/2/19",
      imageUrl: "https://picsum.photos/600/400/?random",
      authorName: "Author 2",
    },
    {
      id: 6,
      title: "Article Title 2",
      date: "11/2/19",
      imageUrl: "https://picsum.photos/800/600/?random",
      authorName: "Author 2",
    },
  ];

  return (
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
      {posts.map((post) => (
        <div key={post.id} className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#" className="relative">
              <Image
                height={0}
                width={0}
                sizes="100vw"
                alt="Placeholder"
                className="h-full w-full"
                src={post.imageUrl}
              />
            </a>
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline hover:underline text-gray-50" href="#">
                  {post.title}
                </a>
              </h1>
              <p className="text-grey-darker text-sm">{post.date}</p>
            </header>
            <footer className=" bg-zinc-400  text-gray-950">
              <DownloadButton />
            </footer>
          </article>
        </div>
      ))}
    </div>
  );
};
