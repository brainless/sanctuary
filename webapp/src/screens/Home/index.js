import React, { Fragment } from "react";

import { Button, Post } from "components/UIHelpers";

export default ({}) => {
  return (
    <Fragment>
      <Post>
        <Fragment>
          <h1>Welcome to Veda</h1>
          <p>
            Let’s face it. Covid-19 has put many of us in vulnerable positions.
            We’re more isolated, disconnected, and lonely than ever before. Veda
            is a safe and social space for us to talk about how we feel and come
            together for support.
          </p>
          <h2 id="rules-of-veda">At Veda, we are:</h2>

          <h3 className="uppercase">Social first</h3>
          <p>
            That means we are here to share ideas, and explore together what
            it’s like to live in the post-Covid world. Veda is a tool to combat
            loneliness and social isolation with a way to connect with one
            another virtually.
          </p>

          <h3 className="uppercase">Kind always</h3>
          <p>
            There are plenty of places for trolling and tearing people down
            online. This isn’t one of them. We’re here to help you find
            conversation to feel human connection, or support when you need it
            most. And we always do that with the golden rule in mind.
          </p>

          <h3 className="uppercase">100% supportive</h3>
          <p>
            We’re here for the good, the bad, and the good, the bad, and the
            ‘oh-my-god when will 2020 be over.’ We’re here for it all, but most
            of all, we’re here for YOU.
          </p>

          <p>
            Veda is{" "}
            <a href="https://github.com/brainless/sanctuary">open source</a> and
            runs on donations. It is completely free to join and use.
          </p>
        </Fragment>
      </Post>

      <div className="container mt-4 mx-auto max-w-lg flex justify-center">
        <Button
          theme="happy"
          element="link"
          size="lg"
          padding="px-6"
          attributes={{ to: "/wall" }}
        >
          Public wall
        </Button>
      </div>
    </Fragment>
  );
};
