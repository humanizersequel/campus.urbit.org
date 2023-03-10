import Head from "next/head";
import Link from "next/link";
import Stars from "../components/icons/stars.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OneUp from "../components/OneUp";
import {
  IntraNav,
  Section,
  Container,
  SingleColumn,
  TwoUp,
  getPostBySlug,
  getAllPosts
} from "@urbit/foundation-design-system";
import Meta from "../components/Meta";


function GuideCard({ guide, className }) {

  const post = {
    title: "Campus Outreach Program",
    description: "Some blurb about campus outreach goes here.",
    image: "https://storage.googleapis.com/media.urbit.org/site/opengraph/operators.png"
  };

  return (
    <>

    <Head>
      <title>Campus Outreach Program</title>
      {Meta(post, false, true)}
    </Head>


      <div
        className={"bg-wall-100 rounded-xl cursor-pointer h-full " + className}
      >
        <div className="p-8 measure flex justify-between flex-col">
          <div>
            <h4 className="mb-4">{guide.title}</h4>
            <p>{guide.description}</p>
          </div>
          <Link href={`/guides/${guide.slug}`}>
            <a
              passHref
              className="bg-green-400 text-white rounded-lg flex justify-center p-3 w-20 mt-4"
            >
              Read
              {/* what is this? */}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

GuideCard.defaultProps = {
  className: "",
};


export default function Home({search, starBuyers, highlights}) {
  return (
    <Container>
      <Head>
        <title>Campus Outreach Program</title>
      </Head>
      <IntraNav ourSite="https://campus.urbit.org" search={search} />
      <SingleColumn>
        <Header search={search} />
        {
          // Hero Statement
        }
        <Section className="pb-6">
          {/* Hero statement */}
          
          <div className="flex flex-col space-y-4">
            <h1 className="max-w-prose">
            [Hero statement goes here. Hero statement goes here.] 
            </h1>
            
          </div>
        </Section>
      

        <Section narrow className="pb-6">
          
   
          <div className="w-full space-y-8 max-w-prose">

            {/* <h2 className="font-normal leading-tight">
              Urbit is a <span className="font-bold">new kind of computer</span>{" "}
              that you can <span className="font-bold">own completely</span> in
              ways that matter:{" "}
              <span className="font-bold">networking, identity, &amp; data</span>.
            </h2> */}

            <div className="space-y-4">
              <p className="">
              <span className="font-bold">The internet cannot be saved.</span> No matter how many unsuspecting youth 
              are press-ganged into derivative careers maintaining, optimizing, and 
              reskinning this house of cards, the web as we know it is doomed to accumulate 
              flotsam at the top of the s-curve until the end of time. 
              </p>
              <p>
              The Urbit Foundation’s Campus Outreach Program helps students discover an alternative to 
              derivative careers in software and help them get started working on something new.
              </p>
              
            </div>
            
          </div>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">Get on Urbit</h2>
          <div
            className={
              "mt-8 items-center flex flex-col md:flex-row space-y-24 md:space-y-0 md:space-x-8"
            }
          >
            <img src="/images/operators-manual.svg" className="basis-1/4" />
            <div
              className="flex flex-col space-y-8"
              style={{ flexBasis: "75%" }}
            >
              <p>
                A series of guides and reference material for assisting you in
                the usage and operations of your ship.
              </p>
              <Link passHref href="/guides/get-on-urbit">
                <a className="button-lg bg-green-400 text-white w-40">
                  View Guide
                </a>
              </Link>
            </div>
          </div>
        </Section>



        <Section>
          <h2 className="m-0 p-0 mr-4">Build on Urbit</h2>
          <div
            className={
              "mt-8 items-center flex flex-col md:flex-row space-y-24 md:space-y-0 md:space-x-8"
            }
          >
            <img src="/images/operators-manual.svg" className="basis-1/4" />
            <div
              className="flex flex-col space-y-8"
              style={{ flexBasis: "75%" }}
            >
              <p>
                A series of guides and reference material for assisting you in
                the usage and operations of your ship.
              </p>
              <Link passHref href="/guides/build-on-urbit">
                <a className="button-lg bg-green-400 text-white w-40">
                  Test
                </a>
              </Link>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4 measure">Get in Touch</h2>
          <p className="pb-6 mt-8 measure">
            Not sure how to get started after attending an event? Want to schedule one at your university? 
            Don't be a stranger. Reach out at the email below.
          </p>

          <div className="table">
            <a
              href="mailto:sam.henriquez@urbit.org"
              className="button-lg type-ui text-white bg-wall-600"
            >
              sam.henriquez@urbit.org
            </a>
          </div>
        </Section>
      </SingleColumn>
      <Footer />
    </Container>
  );
}
