import React from "react";
import Heading from "./Heading";
import Link from "next/link";

const PageHeader = ({ headingText, href, linkTitle, Icon }) => {
  return (
    <div className="flex items-center justify-between py-4 mb-4">
      <Heading title={headingText} />
      <Link
        className="text-white mt-2 bg-green-700 hover:bg-green-700/90 focus:ring-4 focus:outline-none focus:ring-green-700/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-700/55 me-2"
        href={href}
      >
        {<Icon />}
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
};

export default PageHeader;
