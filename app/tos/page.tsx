import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://homerulerproductions.com
// - Name: Home Ruler Productions
// - Contact information: contact@homerulerproductions.com
// - Description: A videography and film production company offering professional video services
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://homerulerproductions.com/privacy-policy
// - Governing Law: United States
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: December 29, 2025

Welcome to Home Ruler Productions!

These Terms of Service ("Terms") govern your use of the Home Ruler Productions website at https://homerulerproductions.com ("Website") and the services provided by Home Ruler Productions. By using our Website and services, you agree to these Terms.

1. Description of Home Ruler Productions

Home Ruler Productions is a professional videography and film production company offering video production, editing, and related creative services.

2. Services and Usage Rights

When you engage Home Ruler Productions for video production services, the terms of ownership and usage rights for the final deliverables will be specified in your service agreement. All intellectual property rights remain with Home Ruler Productions until full payment is received.

3. User Data and Privacy

We collect and store user data, including name, email, and payment information, as necessary to provide our services. For details on how we handle your data, please refer to our Privacy Policy at https://homerulerproductions.com/privacy-policy.

4. Non-Personal Data Collection

We use web cookies to collect non-personal data for the purpose of improving our services and user experience.

5. Governing Law

These Terms are governed by the laws of the United States.

6. Updates to the Terms

We may update these Terms from time to time. Users will be notified of any changes via email.

For any questions or concerns regarding these Terms of Service, please contact us at contact@homerulerproductions.com.

Thank you for choosing Home Ruler Productions!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
