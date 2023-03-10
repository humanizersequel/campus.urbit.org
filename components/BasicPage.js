import { useRouter } from "next/router";
import Head from "next/head";
import Meta from "../components/Meta";
import ErrorPage from "../pages/404";
import Header from "./Header";
import Footer from "./Footer";
import {
  Container,
  SingleColumn,
  Section,
  Markdown,
} from "@urbit/foundation-design-system";

export default function BasicPage({ post, markdown, search }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage />;
  }
  return (
    <Container>
      <Head>
        <title>{post.title} • Campus Outreach • Urbit</title>
        {Meta(post)}
      </Head>
      <SingleColumn>
        <Header search={search} />
        <Section narrow>
          <h1>{post.title}</h1>
          <h3 className=" mt-6">{post.description}</h3>
        </Section>
        <Section narrow className="markdown">
          <Markdown.render content={JSON.parse(markdown)} />
        </Section>
      </SingleColumn>
      <Footer />
    </Container>
  );
}
