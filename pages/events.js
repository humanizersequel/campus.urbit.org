import Head from "next/head";
import Header from "../components/Header";
import Meta from "../components/Meta";
import BlogPreview from "../components/BlogPreview";
import {
  IntraNav,
  Container,
  SingleColumn,
  Section,
} from "@urbit/foundation-design-system";
import { getAllPosts } from "@urbit/foundation-design-system";
import Footer from "../components/Footer";

export default function Event({ posts, search }) {
  const post = {
    title: "Events",
    description: "Upcoming events from the Urbit Foundation's Campus Outreach Program.",
  };

  return (
    <Container>
      <Head>
        <title>Events • campus.urbit.org</title>
        {Meta(post)}
      </Head>
      <IntraNav ourSite="https://campus.urbit.org" search={search} />
      <Header search={search} />
      <SingleColumn>
        <Section>
          <h1 className="">Events</h1>
          <div class="pt-12 pb-12 sm:pr-32">

            <p className="">Upcoming events from the Urbit Foundation's Campus Outreach Program.</p>

          </div>
        </Section>
        <Section>
          {posts.map((post) => (
            <BlogPreview key={post.slug} post={post} />
          ))}
        </Section>
      </SingleColumn>
      <Footer />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(
    ["title", "slug", "date", "description", "extra"],
    "events",
    "date"
  );

  return {
    props: { posts },
  };
}