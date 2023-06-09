import React from "react";
import { styles } from "@mui/material/styles";
import Image from "next/image";

const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="appfooter">
      {/* <footer className={styles.footer}> */}
      {/* Add your footer content here */}
      <div className="o-site-ft">
        <div className="o-wrapper">
          <div className="o-footer">
            <div className="o-footer-primary u-showAboveSmall">
              <ul className="o-blocks o-blocks_5up@sm o-blocks_9up@xlg">
                <li>
                  <ul className="c-taxList">
                    <li>
                      <a href="/poems">Poems</a>
                      <ul>
                        <li>
                          <a href="/poems">
                            All Poems
                          </a>
                        </li>
                        <li>
                          <a href="/poems">
                            Poem Guides
                          </a>
                        </li>

                        <li>
                          <a href="/poems">
                            Collections
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="c-taxList">
                    <li>
                      <a href="/">Authors</a>
                      <ul>
                        <li>
                          <a href="/">
                            All Poets
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="c-taxList">
                    <li>
                      <a href="/articles">
                        Articles
                      </a>
                      <ul>
                        <li>
                          <a href="/essays">
                            Essays
                          </a>
                        </li>
                        <li>
                          <a href="interviews">
                            Interviews
                          </a>
                        </li>
                        <li>
                          <a href="/articles/">
                            Profiles
                          </a>
                        </li>
                        <li>
                          <a href="/articles">
                            All Articles
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="c-taxList">
                    <li>
                      <a href="/essays">Essays</a>
                      <ul>
                        <li>
                          <a href="/essays">
                            Top Essays
                          </a>
                          </li>
                          <li>
                          <a href="/essays">
                              Most Contributions
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <ul className="c-taxList">
                    <li>
                      <a href="/book-reviews">
                        Book Reviews
                      </a>
                      <ul>
                        <li>
                          <a href="/book-reviews">
                            Children
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            Teens
                          </a>
                        </li>
                        <li>
                          <a href="https://www.--foundation.org/learn/adults">
                            Adults
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <ul className="c-taxList">
                    <li>
                      <a href="https://www.--foundation.org/--magazine">
                        <i>Inverbally</i> Magazine
                      </a>
                      <ul>
                        <li>
                          <a href="/">
                            Current Issue
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i>Inverbally</i> Other Issues
                          </a>
                        </li>

                        <li>
                          <a href="/about">
                            About the Magazine
                          </a>
                        </li>
                        <li>
                          <a href="/submit">
                            How to Submit
                          </a>
                        </li>
                        <li>
                          <a href="/advertise">
                            Advertise with Us
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="c-taxList">
                    <li>
                      <a href="/about">
                        About Us
                      </a>
                      <ul>
                        <li>
                          <a href="/give">Give</a>
                        </li>
                        <li>
                          <a href="/">Visit</a>
                        </li>
                        <li>
                          <a href="/">
                            Library
                          </a>
                        </li>
                        <li>
                          <a href=
                          "/">
                            News
                          </a>
                        </li>

                        <li>
                          <a href="/">
                            Media Partnerships
                          </a>
                        </li>

                        <li>
                          <a href="/">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            Jobs
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="o-footer-primary">
              <div className="o-footer-split">


                <div className="o-footer-split-primary">
                  <div className="o-footer-icons">
                    <ul className="c-socialNav">
                      <li className="c-socialNav-item">
                        <a
                          href="https://twitter.com/inverbally"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="24"
                            height="24"
                          >
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </a>
                      </li>
                      <li className="c-socialNav-item">
                        <a
                          href="https://www.facebook.com/inverbally"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="24"
                            height="24"
                          >
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                          </svg>
                        </a>
                      </li>
                      <li className="c-socialNav-item">
                        <a
                          href="https://www.instagram.com/inverbally/"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            width="24"
                            height="24"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </a>
                      </li>

                      <li className="c-socialNav-item c-mix-socialNav-item_pronounce">
                        <a
                          href="https://twitter.com/inverbally"
                          target="_blank"
                        >
                          {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="24" height="24"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg> */}

                          <span className="c-txt c-txt_meta c-mix-txt_inherit">
                            <i>Inverbally</i> Magazine
                          </span>
                        </a>
                      </li>
                    </ul>{" "}
                  </div>
                  <div className="o-footer-utility">
                    <ul className="o-hList o-hList_inline@small">
                      <li>
                        <a
                          href="https://www.--foundation.org/contact"
                          className="c-txt c-txt_austere"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.--foundation.org/newsletter"
                          className="c-txt c-txt_austere"
                        >
                          Newsletters
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.--foundation.org/foundation/press"
                          className="c-txt c-txt_austere"
                        >
                          Press
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.--foundation.org/foundation/privacy"
                          className="c-txt c-txt_austere"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.--foundation.org/foundation/terms-of-service"
                          className="c-txt c-txt_austere"
                        >
                          Terms of Use
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="o-footer-auxiliary" role="contentinfo">
                    <ul className="o-hList o-hList_inline@med o-hList_compressed o-hList_compressed_asymmetrical">
                      <li>
                        <span className="c-txt c-txt_meta">
                          Kampala
                          <br className="u-hideAboveSmall" /> Uganda
                        </span>
                      </li>
                      <li>
                        <small className="c-txt c-txt_meta">
                          &copy; {currentYear} Inverbally
                        </small>
                      </li>
                    </ul>{" "}
                  </div>
                </div>
                <div className="o-footer-split-primary">
                  <a href="https://www.--foundation.org/">
                    <img
                      src="/YellowonBlack.png"
                      alt="Logo"
                      style={{
                        height: "1.6625rem",
                        width: "auto",
                        marginRight: "1.0rem",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
