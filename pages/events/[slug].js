import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Meta from "../../components/Meta";
import PostPreview from "../../components/PostPreview";
import ErrorPage from "../404";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  IntraNav,
  Container,
  Markdown,
  SingleColumn,
  Section,
  TwoUp,
  getPostBySlug,
  getAllPosts,
  getNextPost,
  getPreviousPost,
  formatDate,
  generateDisplayDate,
} from "@urbit/foundation-design-system";

export default function BlogPost({
  post,
  search,
  markdown,
  nextPost,
  previousPost,
}) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage />;
  }
  const date = generateDisplayDate(post.date);

  return (
    <Container>
      <Head>
        <title>{post.title} • Events • campus.urbit.org</title>
        {Meta(post, false, true)}
      </Head>
      <IntraNav ourSite="https://campus.urbit.org" search={search} />
      <Header search={search} />
      <SingleColumn>
        <Section narrow className="pb-10">
          <h1>{post.title}</h1>
          <h3 className=" mt-6">{post.description}</h3>
          
          <div className="flex items-baseline mt-6">
            {post.extra.author ? (
              <div className="type-sub-bold mr-2">{post.extra.author}</div>
            ) : null}
            {post.extra.ship ? (
              <Link href={`https://urbit.org/ids/${post.extra.ship}`} passHref>
                <a className="type-sub-bold text-wall-500 font-mono">
                  {post.extra.ship}
                </a>
              </Link>
            ) : null}
          </div>
          <br></br>
          <div className="text-wall-500">
            
            <p>{formatDate(date)} • {post.extra.time ? post.extra.time : null}</p>
            
            <p>{post.extra.location1}</p>
            <p>{post.extra.location2}</p>
            <p>{post.extra.location3}</p>
          
          </div>
        </Section>
        <Section short narrow className="markdown py-0 pb-20">
          <Markdown.render content={JSON.parse(markdown)} />
        </Section>
        <Section wide className="flex">
          <TwoUp>
            {nextPost ? (
              <PostPreview title="Next Post" post={nextPost} />
            ) : null}
            {previousPost ? (
              <PostPreview title="Previous Post" post={previousPost} />
            ) : null}
          </TwoUp>
        </Section>
      </SingleColumn>
      <Footer />
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const nextPost =
    getNextPost(
      params.slug,
      ["title", "slug", "date", "description", "extra"],
      "events"
    ) || null;

  const previousPost =
    getPreviousPost(
      params.slug,
      ["title", "slug", "date", "description", "extra"],
      "events"
    ) || null;

  const post = getPostBySlug(
    params.slug,
    ["title", "slug", "date", "description", "content", "extra"],
    "events"
  );

  const markdown = JSON.stringify(Markdown.parse({ post: { content: String.raw`${post.content}` } }));

  return {
    props: { post, markdown, nextPost, previousPost },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug", "date"], "events", "date");

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
