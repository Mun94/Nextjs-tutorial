import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import { Divider, Header } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  function getData() {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>home | 문성우</title>
      </Head>
      <Header>베스트 상품</Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header>신상품</Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}
