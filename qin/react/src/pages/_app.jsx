import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { SWRConfig } from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);

  const json = await res.json();

  return json;
};

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
