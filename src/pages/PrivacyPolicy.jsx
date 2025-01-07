import React from "react";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 dark:text-gray-400">
        <h1 className="text-4xl font-bold mb-4 dark:text-gray-200 text-center text-primary tracking-wide">
          Privacy Policy
        </h1>

        <p className="mb-4 text-gray-800">
          This policy reveals the privacy practices followed by the Precise Web
          Works. We are dedicated to securing your privacy. What we ask you
          about your personal information is entirely secure and confidential.
          You can be certain that it will be used only following this privacy
          statement. We hope to suggest that your privacy policy matters, but
          most importantly, what needs to be done and how to secure your
          website. Consider a few reasons why privacy policy is important.
        </p>

        <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">
          Personal Information
        </h2>

        <p className="mb-4 text-gray-800">
          When you request us for a catalogue, email, name, project budget,
          phone number, and information concerning the project, please register
          for the consultation session. We require personal information,
          including phone number, name and email address, which is never shared
          with any 3rd party.
        </p>
        <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">
          How Do We Use The Information We Have
        </h2>

        <p className="mb-4 text-gray-800">
          We use your information to keep in touch, discuss your project
          details, and maintain communication. We don’t sell, share or rent your
          personal or non-personal information with any third parties for their
          marketing purpose. We cooperate with law implementation establishments
          and third parties to implement laws, secure rights data and prevent
          scams. We may reveal your details if demanded to do so by law.
        </p>
        <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">
          User Generated Content
        </h2>

        <p className="mb-4 text-gray-800">
          Assume that you pay user-generated content to Precise Web Works, for
          example. In that case, a comment on our blog and some of your
          information, such as your name or email address, might be displayed on
          the website. When delivering any content, you agree that Precise Web
          Works may access, disclose your information, preserve, or any content
          posted by you to (a) apply the terms and conditions of usage; (b) obey
          any legal procedure; (c) claim responses to any posted content that
          violates 3rd party rights (d) answer to your customer service request;
          (e) protect the property, rights or safety of Precise Web Works, other
          website users, and the audience.
        </p>
        <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">Cookies</h2>

        <p className="mb-4 text-gray-800">
          At the time of our website visit, a text file named a cookie is saved
          by the browser. There is no private information in the cookies, and
          they don’t provide access to our firm in any way. Cookies are used for
          the analysis of traffic by Precise Web Works. Accepting, or you can
          choose declining cookies. Most browsers accept the cookies
          automatically. However, your settings from the browser could be
          declined at any time by you. It might restrict you from having entire
          access to Precise Web Works. We don’t reuse, sell, or provide the
          statistics saved in cookies to any parties for marketing and data
          mining tactics.
        </p>
        <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">
          Third Parties Cookies
        </h2>

        <p className="mb-4 text-gray-800">
          These might be set up on your PC by any 3rd party, such as Facebook,
          YouTube, and Twitter, that has implemented add-ins. It would help if
          you controlled the cookie policy through the sites by browsing their
          privacy policy pages directly.
        </p>
        <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">
          Links to Other Websites
        </h2>

        <p className="mb-4 text-gray-800">
          While browsing Precise Web Works, you will find external links for
          other websites. Clicking on these external links and exiting from our
          website will be subject to the website’s privacy policy. We do not
          control these. Therefore, we are not responsible for controlling the
          privacy of your provided information while browsing these websites.
        </p>
        <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">
          Protection of Information
        </h2>

        <p className="mb-4 text-gray-800">
          We have applied operational and technological steps for security to
          stop your data from being lost, misused, destroyed or altered. Though
          no way of broadcasting over the net is 100% safe, and as such, you
          transmit at your own risk. Using our site, you approve the collection
          and use of your data as defined in the privacy policy.
        </p>
        <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">
          Changes to the Policy
        </h2>

        <p className="mb-4 text-gray-800">
          We might make changes to this policy at any time. All the
          modifications will be made on this page of the privacy policy. We
          recommend you visit this page daily to be aware of the modifications.
          If you feel that we are not abiding by this privacy policy, be sure to
          get in touch with us immediately by emailing us at{" "}
          <span className=" text-maroon hover:text-red-500 duration-300">
            <Link to={"mailto:help@precisewebworks.com"}>
              help@precisewebworks.com
            </Link>
          </span>{" "}
          or{" "}
          <span className="text-maroon hover:text-red-500 duration-300">
            <Link to={"tel:+12405995988"}>240-599-5988</Link>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
