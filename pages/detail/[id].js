import axios from "axios";
import Item from "../../src/component/Itme";
import Head from "next/head";
import { useRouter } from "next/router";

const Post = ({ item, name }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    // paths: [
    //   { params: { id: "740" } },
    //   { params: { id: "730" } },
    //   { params: { id: "729" } },
    // ],
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true, // false이면 없는 페이지에 대해 대응을 하지 않는다.(404에러 발생), true이면 false일 때와 같이 getstataicpath로 전달된 경로들은 빌드타임에 만들어지는 것은 변함이 없고 나머지들은 최초 접속시 props가 빈 상태로 그려지고 이후에 백그라운드에서 정적파일로 html과json파일을 생성해준다. 2번째 접속부터 정적페이지를 사용함 그래서 새로고침을해도 빠르게 렌더링 됨
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  console.log(process.env.name);

  return {
    props: {
      item: data,
    },
  };
}
