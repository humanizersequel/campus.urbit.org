import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IntraNav, capitalize, MenuTray } from "@urbit/foundation-design-system";
import classnames from "classnames";

function ActiveLink({ children, href, className, currentPath }) {
  const firstCrumb = currentPath.split("/")[1];

  const activeClassName = classnames({
    "text-wall-600": "/" + firstCrumb === href,
    "text-wall-500": "/" + firstCrumb !== href,
  });

  return (
    <Link href={href} passHref>
      <a className={`${className} ${activeClassName}`}>{children}</a>
    </Link>
  );
}

export default function Header({search}) {
  const [isOpen, setTray] = useState(false);

  const currentPath = useRouter().asPath;

  const routeDepth = currentPath.split("/").length;

  const firstCrumb = currentPath.split("/")[1];
  
  return (
    <>
    {" "}
    
    <header className="layout px-4 md:px-8 flex justify-between items-center pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-12 lg:pb-24">
      
      <div>
          <Link href="/" passHref>
            <a className="text-lg font-semibold leading-3 mr-5">
              Campus Outreach
            </a>
          </Link>
          {routeDepth > 2 ? (
            <Link href={`/${firstCrumb}`} passHref>
              <a className="inline md:hidden type-ui text-wall-500 ml-2">
                {capitalize(firstCrumb)}
              </a>
            </Link>
          ) : null}
        </div>

      <nav className="hidden md:flex">

      <ActiveLink
          currentPath={currentPath}
          className="mr-4 type-ui"
          href="/guides/get-on-urbit"
        >
          Get on Urbit
        </ActiveLink>

      <ActiveLink
          currentPath={currentPath}
          className="mr-4 type-ui"
          href="/guides/build-on-urbit"
        >
          Build on Urbit
        </ActiveLink>

        <ActiveLink
          currentPath={currentPath}
          className="mr-4 type-ui"
          href="/events"
        >
          Events
        </ActiveLink>

      </nav>
      <MenuTray isOpen={isOpen} setTray={setTray} search={search}>
        <Link href="/" passHref>
          <a className="font-semibold mb-4">Campus Outreach</a>
        </Link>
        <Link href="https://urbit.org" passHref>
          <a className="mt-2">Urbit.org</a>
        </Link>
        <Link href="https://operators.urbit.org" passHref>
          <a className="mt-2">Operators</a>
        </Link>
        <Link href="https://developers.urbit.org" passHref>
          <a className="mt-2">Developers</a>
        </Link>
        <Link href="https://roadmap.urbit.org" passHref>
          <a className="mt-2 mb-4">Roadmap</a>
        </Link>
        <hr className="border-wall-200 mt-2 mb-4" />
        
        <ActiveLink
          currentPath={currentPath}
          className="mt-2 type-ui"
          href="/guides/get-on-urbit"
        >
          Get on Urbit
        </ActiveLink>

        <ActiveLink
          currentPath={currentPath}
          className="mt-2 type-ui"
          href="/guides/build-on-urbit"
        >
          Build on Urbit
        </ActiveLink>

        <ActiveLink
          currentPath={currentPath}
          className="mt-2 type-ui"
          href="/events"
        >
          Events
        </ActiveLink>
      </MenuTray>
    </header>
    </>
  );
}
