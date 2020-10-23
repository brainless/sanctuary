import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const Heading = ({ x = "3", children }) => {
  return React.createElement(`h${x}`, {}, children);
};

export const Post = ({
  title,
  titleLink = null,
  inBox = true,
  headingSize = "2",
  inContainer = true,
  isMarkdown,
  children,
}) => {
  const boxClasses = "bg-white border rounded-md p-2";

  const Title = () => (
    <Fragment>
      {titleLink && title ? (
        <Heading x={headingSize}>
          <Link>{title}</Link>
        </Heading>
      ) : null}
      {!!title && titleLink === null ? (
        <Heading x={headingSize}>{title}</Heading>
      ) : null}
    </Fragment>
  );

  const Inner = () => (
    <div className={inBox ? boxClasses : ""}>
      <Title />
      {isMarkdown ? (
        <ReactMarkdown>{children}</ReactMarkdown>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </div>
  );

  if (inContainer) {
    return (
      <div className="container mx-auto max-w-xl">
        <Inner />
      </div>
    );
  } else {
    return <Inner />;
  }
};

export const Button = ({
  label,
  element = "button",
  size = "md",
  theme = "primary",
  disabled = false,
  padding = "px-2",
  margin = "mx-1",
  rounded = "rounded",
  attributes,
  children,
}) => {
  let themeClasses = "",
    sizeClasses = "";
  if (theme === "action") {
    themeClasses =
      "bg-blue-300 text-gray-800 hover:bg-blue-700 hover:text-white";
  } else if (theme === "happy") {
    themeClasses =
      "bg-green-400 text-gray-700 hover:bg-green-700 hover:text-white";
  } else if (theme === "simple") {
    themeClasses =
      "bg-gray-300" +
      (disabled
        ? " text-gray-500"
        : " text-gray-700 hover:bg-gray-700 hover:text-white");
  } else if (theme === "link") {
    themeClasses = "inline-block text-blue-600 underline";
  }

  if (size === "lg") {
    sizeClasses = "text-lx leading-8";
  } else if (size === "sm") {
    sizeClasses = "text-xs leading-5";
  } else {
    sizeClasses = "text-sm leading-6";
  }

  const classes =
    "inline-block shadow focus:outline-none" +
    (disabled ? " " : " hover:shadow-none ") +
    `${rounded} ${padding} ${margin} ${themeClasses} ${sizeClasses}`;

  if (element === "button") {
    return (
      <button className={classes} {...attributes} disabled={disabled}>
        {label}
        {children}
      </button>
    );
  } else if (element === "link") {
    return (
      <Link className={classes} {...attributes} disabled={disabled}>
        {label}
        {children}
      </Link>
    );
  }
};

export const HashTag = ({ id, label, slug, isLink = false }) => {
  const commonClasses =
    "inline-block text-green-700 text-sm font-thin bg-gray-200 px-2 rounded shadow-sm mx-1";

  if (isLink) {
    return (
      <Link
        to={`/tag/${id}/${slug}`}
        className={`${commonClasses} hover:bg-gray-600 hover:text-white`}
      >
        #{label}
      </Link>
    );
  } else {
    return <span className={commonClasses}>#{label}</span>;
  }
};
