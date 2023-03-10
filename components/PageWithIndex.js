import { useRouter } from "next/router";
import Head from "next/head";
import Meta from "../components/Meta";
import ErrorPage from "../pages/404";
import Header from "./Header";
import Footer from "./Footer";
import {
  IntraNav,
  TableOfContents,
  Markdown,
  Container,
  SingleColumn,
  Section,
} from "@urbit/foundation-design-system";

export default function PageWithIndex({ post, markdown, search }) {
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
      <IntraNav ourSite="https://campus.urbit.org" search={search} />
      <SingleColumn>
        <Header search={search} />
        <Section>
          <h1>{post.title}</h1>
          <h3 className=" mt-6">{post.description}</h3>
        </Section>
        <Section>
          <div className="flex markdown">
            <Markdown.render content={JSON.parse(markdown)} />
          </div>
          <TableOfContents />
        </Section>
      </SingleColumn>
      <Footer />
    </Container>
  );
}
