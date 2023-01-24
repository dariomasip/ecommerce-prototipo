import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Feed } from "@/components/Feed/Feed";
import styles from "@/styles/Home.module.css";
import { CardItem } from "@/components/CardItem/CardItem";
import dataJSON from "../data/products.json";
import feedsJSON from "../data/feeds.json";
import { Header } from "@/components/sections/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {feedsJSON.map((item, key) => {
        return (
          <Feed>
            {dataJSON.map((item, key) => (
              <CardItem
                id={item.id}
                titulo={item.nombre}
                marca={item.marca}
                precio={item.precio}
                image={item.image}
                key={key}
              />
            ))}
          </Feed>
        );
      })}
    </>
  );
}
