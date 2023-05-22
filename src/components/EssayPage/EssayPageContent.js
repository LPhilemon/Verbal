
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../../../firebase/clientApp";
import { collection, query, orderBy, limitToLast, getDocs, where } from "firebase/firestore";
import sanitizeHtml from 'sanitize-html';
// import styles from "../../styles/EssayListItem.module.css";

const EssayPageContent = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [essayData, setEssayData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const essaysRef = collection(db, "essays");
    const q = query(essaysRef, where("slug", "==", slug), orderBy("publishedAt", "desc"), limitToLast(1));
    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          setError("Essay not found");
        } else {
          const data = querySnapshot.docs[0].data();
          setEssayData(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div>Loading essay content...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!essayData) {
    return <div>Essay not found</div>;
  }

  const { title, author, publishedAt, content, imageURL } = essayData;

  const sanitizedContent = sanitizeHtml(content);

  return (
    <div className="o-wrapper">
      <div className="c-tier c-mix-tier_offsetAsymmetricalShort">
        <article className="o-article">
          <div className="o-article-hd">
            <div className="o-grid o-grid_flexy o-grid_flexy_ctr">
              <div className="o-grid-col o-grid-col_9of12 o-mix-grid-col_offset1of12">
                <div className="o-titleBar">
                  <div className="o-titleBar-preamble">
                    <span className="c-txt c-txt_catMeta">Essay</span>
                  </div>
                  <div className="o-titleBar-hd">
                    <h1 className="c-hdgSerif c-hdgSerif_1 c-mix-hdgSerif_lowProfile"> {title}</h1>
                  </div>
                  <div className="o-titleBar-summary o-titleBar-summary_constrained">
                    <span className="c-hdgSans c-hdgSans_7">Clare Bucknell&rsquo;s<em> The Treasuries</em> examines how poetry anthologies have shaped national identity&mdash;and preserved some essays better left forgotten.</span>
                  </div>
                  <div className="o-titleBar-meta">
                    <div>
                      <span className="c-txt c-txt_attribution">
                        By <a href="#">{author}</a>
                        <>
                          Written On: {publishedAt}</>
                      </span>

                    </div>


                  </div>
                </div>
              </div>
              <div className="o-grid-col o-grid-col_2of12 o-mix-grid-col_flexRight@small o-mix-grid-col_minorTopOffset">




                <ul className="c-socialBlocks " data-view="ShareView">
                  <li>

                    <a
                      href="https://twitter.com/inverbally"
                      target="_blank"
                      className="js-shareTwitter"
                    >
                      <svg
                        className="icon icon_twitter mix-icon_socialBlock icon_sm" role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="24"
                        height="24"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </a>

                  </li>
                  <li>

                    <a
                      href="https://www.facebook.com/inverbally"
                      target="_blank"
                      className="js-shareFB"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="24"
                        height="24"
                        className="icon icon_facebook mix-icon_socialBlock icon_sm" role="presentation"
                      >
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg>
                    </a>


                  </li>
                  <li>

                    <a
                      href="https://www.instagram.com/inverbally/"
                      target="_blank"
                      className="js-sharePrint"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="24"
                        height="24"

                        className="icon icon_print mix-icon_socialBlock icon_sm" role="presentation"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">

                      <svg className="icon icon_envelope mix-icon_socialBlock icon_sm" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                    </a>
                  </li>

                </ul>

              </div>
            </div>
          </div>


          <div className="o-article-media">
            <div className="o-grid">
              <div className="o-grid-col o-grid-col_11of12 o-mix-grid-col_offset1of12">
                <div className="o-mediaEnclosure">
                  {imageURL && (
                    <img
                      className="article-responsive-img"
                      src={imageURL}
                      alt={title}
                      style={{
                        display: "block",
                        marginBottom: "24px"
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="o-article-bd">
            <div className="o-vr o-vr_4x">
              <div className="o-grid">
                <div className="o-grid-col o-grid-col_8of12 o-mix-grid-col_offset1of12">

                  <div className="o-vr o-vr_2x">
                    <div className="c-userContent">


                      <p><span><span><span>
  {/* {content} */}

                        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
                      </span></span></span></p>

                    </div>
                  </div>


                  <div className="c-auxContent">
                    <div className="c-auxContent-meta">
                      <div>
                        <span className="c-txt c-txt_auxMeta">Originally Published: April 17th, 2023</span>
                      </div>
                    </div>


                    <div className="c-auxContent-bd">
                      <div className="c-feature">
                        <div className="c-feature-bd c-feature-bd_moderate">
                          <p>Declan Ryan was born in Mayo, Ireland and now lives in London. His first collection, <em>Crisis Actor</em>, is forthcoming from Faber & Faber.

                          </p>
                        </div>
                        <div className="c-feature-ft">
                          <a href="https://www.invise.org/poets/declan-ryan" className="c-txt c-txt_minimalCta">Read Full Biography</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="o-grid-col o-grid-col_3of12">




                  <div className="o-vr o-vr_3x">
                    <div className="c-index">
                      <div className="c-index-label c-index-label_emphatic">
                        <span className="c-txt c-txt_catMeta">Related Content</span>
                      </div>
                      <div className="c-index-list">
                        <ul className="c-vList c-vList_bordered">
                          <li>
                            <div className="c-feature c-mix-feature_shrinkwrap">
                              <div className="c-feature-preamble">
                                <span
                                  className="c-txt c-txt_attribution">Related Authors</span>
                                <ul>
                                  <li>
                                    <a href="https://www.invise.org/poets/al-alvarez" className="c-hdgSans c-hdgSans_5">
                                      Al Alvarez
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.invise.org/poets/stephen-berg" className="c-hdgSans c-hdgSans_5">
                                      Stephen Berg
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.invise.org/poets/rupert-brooke" className="c-hdgSans c-hdgSans_5">
                                      Rupert Brooke
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.invise.org/poets/kevin-coval" className="c-hdgSans c-hdgSans_5">
                                      Kevin Coval
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.invise.org/poets/rita-dove" className="c-hdgSans c-hdgSans_5">
                                      Rita Dove
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="c-feature c-mix-feature_shrinkwrap">
                              <div className="c-feature-preamble">
                                <span
                                  className="c-txt c-txt_attribution">Related Essays</span>
                                <ul>
                                  <li>
                                    <a href="https://www.invise.org/poetrymagazine/articles/60488/no-antonin-artaud-with-the-flapjacks-please" className="c-hdgSans c-hdgSans_5">
                                      No Antonin Artaud with the Flapjacks, Please
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a href="#" className="c-txt c-txt_minimalCta">
                              See All Related Content
                            </a>

                            <svg className="icon icon_arrowRight icon_nemesis" role="img" aria-label="arrowRight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>

                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>


          </div>
        </article>
      </div>
    </div>
  );
};

export default EssayPageContent;

