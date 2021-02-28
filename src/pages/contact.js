import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me" description="Get in touch" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/mqkpwdlg" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                name="_replyto"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" value="Send" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default contact;
