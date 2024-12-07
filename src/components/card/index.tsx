"use client"

import Image from "next/image";
import { DownloadButton } from "./download_button";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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
      {posts.map((post, index) => (
        <div key={post.id} className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <PhotoProvider
   toolbarRender={({ rotate, onRotate, scale, onScale }) => {
    return (
      <>
      <svg onClick={() => onScale(scale + 1)} width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0">
        </g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <path fillRule="evenodd" clipRule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z" fill="#000000"></path> <path fillRule="evenodd" clipRule="evenodd" d="M10 14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14V12H14C14.5523 12 15 11.5523 15 11C15 10.4477 14.5523 10 14 10H12V8C12 7.44772 11.5523 7 11 7C10.4477 7 10 7.44772 10 8V10H8C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H10V14Z" fill="#000000">
        </path></g>
        </svg>
    <svg onClick={() => onRotate(rotate + 90)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="28px" width="28px" version="1.1" id="Capa_1" viewBox="0 0 214.367 214.367" xmlSpace="preserve">
    <path d="M202.403,95.22c0,46.312-33.237,85.002-77.109,93.484v25.663l-69.76-40l69.76-40v23.494  c27.176-7.87,47.109-32.964,47.109-62.642c0-35.962-29.258-65.22-65.22-65.22s-65.22,29.258-65.22,65.22  c0,9.686,2.068,19.001,6.148,27.688l-27.154,12.754c-5.968-12.707-8.994-26.313-8.994-40.441C11.964,42.716,54.68,0,107.184,0  S202.403,42.716,202.403,95.22z"/>
    </svg>
      </>
    )
  }}>
          <article className="overflow-hidden rounded-lg shadow-lg">
            <PhotoView src={post.imageUrl} key={index}>
              <Image
                height={0}
                width={0}
                sizes="100vw"
                alt="Placeholder"
                className="h-full w-full"
                src={post.imageUrl}
                />
                </PhotoView>
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
                </PhotoProvider>
        </div>
      ))}
    </div>
  );
};
