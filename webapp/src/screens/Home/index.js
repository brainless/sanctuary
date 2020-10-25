import React, { Fragment } from "react";

import { Button, Post } from "components/UIHelpers";

const homePageIntroContent = `
# veda

A sacred and safe place for people who are in mentally stressful situations - living with psychological conditions like anxiety, depression, paranoia, stress disorder, attention issues or any other.


## Rules of veda
Simple rules guide the veda:

 - Share only what you are going through, not what you feel about someone else
 - Reply to someone's post only if you have something positive or supportive, anything else will be flagged and removed
 - Posts/replies are always anonymous - we do not track the author of the content at all
 - You have to login with an email only as a spam prevention mechanism
 - Optionally, you can get a link to any post you create so you can come back later, but the site still does not track you
 - Professional counselors may join and help, only if they declare themselves as such
 - Rules guiding the system, except the ones about anonymity, can be decided by the community

All software behind Veda will be open source, [maintained on GitHub](https://github.com/brainless/veda). Infrastructure will be run by donations from hosting companies. Veda will be completely free to join and use.
`;

export default ({}) => {
  return (
    <Fragment>
      <Post>
        <Fragment>
          <h1>Veda</h1>
          <p>
            A sacred and safe place for people who are in mentally stressful
            situations - living with psychological conditions like anxiety,
            depression, paranoia, stress disorder, attention issues or any
            other.
          </p>
          <h2 id="rules-of-veda">Rules of Veda</h2>
          <p>Simple rules guide the veda:</p>
          <ul>
            <li>
              Share only what you are going through, not what you feel about
              someone else
            </li>
            <li>
              Reply to someone&#39;s post only if you have something positive or
              supportive, anything else will be flagged and removed
            </li>
            <li>
              Posts/replies are always anonymous - we do not track the author of
              the content at all
            </li>
            <li>
              You have to login with an email only as a spam prevention
              mechanism
            </li>
            <li>
              Optionally, you can get a link to any post you create so you can
              come back later, but the site still does not track you
            </li>
            <li>
              Professional counselors may join and help, only if they declare
              themselves as such
            </li>
            <li>
              Rules guiding the system, except the ones about anonymity, can be
              decided by the community
            </li>
          </ul>
          <p>
            All software behind Veda is open source, and{" "}
            <a href="https://github.com/brainless/sanctuary">
              maintained on GitHub
            </a>
            . Infrastructure is run by donations. Veda is completely free to
            join and use.
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
