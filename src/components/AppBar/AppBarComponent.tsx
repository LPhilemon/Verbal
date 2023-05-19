import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import dynamic from "next/dynamic";
import { MouseEvent} from 'react';







const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const AppBarComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [dropdownAnchor, setDropdownAnchor] = useState<null | HTMLElement>(
    null
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  // const [openMagazines2, setOpenMagazines2] = React.useState(false);
  // const [openAuthors, setOpenAuthors] = React.useState(false);
  // const [openJumbled, setOpenJumbled] = React.useState(false);
  // const [openBookReviews, setOpenBookReviews] = React.useState(false);
  // const [expanded, setExpanded] = useState('')
  const menuRef = useRef(null);
  const menuRefs = useRef<HTMLDivElement>(null);
  
  const handleMenuOpen = (event : MouseEvent, menuId: string) => {
    if (activeMenu === menuId) {
      setActiveMenu("");
    } else {
      setActiveMenu(menuId);
    }
  };
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    
    if (menuRefs?.current && (menuRefs.current as HTMLDivElement).contains(event.target as Node)) {
      setActiveMenu('');
    }}
  

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     setActiveMenu("");
  //   }
  // };
  // const [openMagazines, setOpenMagazines] = React.useState(false);
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  const handleClick = () => {
    setOpen(!open);
  };

  // const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };
  const handleMenuClose = (event: React.FocusEvent<HTMLElement>) => {
    (event.currentTarget as HTMLElement).blur();
    handleClickOutside;
  };

  const handleDropdownToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (dropdownAnchor) {
      setDropdownAnchor(null);
    } else {
      setDropdownAnchor(event.currentTarget);
    }
  };


  // const handleClicker = (item) => {
  //   if (expanded === item) {
  //     setExpanded("");
  //   } else {
  //     setExpanded(item);
  //   }
  // };
  // const isExpanded = (item) => expanded === item;
  // const closeButton = (
  //   <IconButton
  //     edge="start"
  //     color="inherit"
  //     aria-label="menu"
  //     onClick={handleDrawerToggle} // Add onClick handler here
  //     sx={{
  //       position: "absolute",
  //       right: "8px",
  //       top: "8px",
  //       color: "#000", // Change the color to black
  //       fontSize: "3rem", // Add fontSize here
  //     }}
  //   >
  //     <CloseIcon />
  //   </IconButton>
  // );

  // mobile handlers





  const Drawer2 = () => {
    const [expandedItems, setExpandedItems] = useState([false, false, false, false, false]);

    const toggleSublist = (index: number) => {
      const newExpandedItems = [...expandedItems];
      newExpandedItems[index] = !newExpandedItems[index];
      setExpandedItems(newExpandedItems);
    };
    
  

    return (
      <div className="drawer">

        <ul className="drawer-list">
          {/* AUTHORS ListItem */}
          <li  className={`drawer-link${expandedItems[0] ? "expanded" : ""
  }`} 
              onClick={(e) => {
                e.preventDefault();
                toggleSublist(0);
              }}>
                 <div className="drawer-item"> 
                 <a
              href="#"
              className="drawer-link"
              
            >
              AUTHORS
            </a>
</div>
            
            <div className="divider"></div>
            
          <div>
          <ul className={`sublist-item-style sublist${expandedItems[0] ? " expanded" : ""}`}>
              <li className="sublist-item">
                <a href="/authors/some-link" className="sublist-link">
                  Some Author
                </a>
              </li>
            </ul>
          </div>
          </li>

          {/* JUMBLED ListItem */}
          <li  className={`drawer-link${expandedItems[1] ? "expanded" : ""
  }`} 
              onClick={(e) => {
                e.preventDefault();
                toggleSublist(1);
              }}>
                <div className="drawer-item"> 
                <a
              href="#"
              className="drawer-link"
              
            >
              JUMBLED
            </a>
                </div>
            
            <div className="divider"></div>
            <div>
            <ul className={`sublist-item-style sublist${expandedItems[1] ? " expanded" : ""}`}>
              <li className="sublist-item">
                <a href="/poems/some-link" className="sublist-link">
                  Some Poem
                </a>
              </li>
            </ul>
            </div>
          </li>

          {/* BOOK REVIEWS ListItem */}
          <li className={`drawer-link${expandedItems[2] ? "expanded" : ""
  }`} 
              onClick={(e) => {
                e.preventDefault();
                toggleSublist(2);
              }}>
                <div className="drawer-item">
                <a
              href="#"
              className="drawer-link"
             
            >
              BOOK REVIEWS
            </a>
                </div>
            
            <div className="divider"></div>
            <div>
            <ul className={`sublist-item-style sublist${expandedItems[2] ? " expanded" : ""}`}>
              <li className="sublist-item">
                <a href="/authors/some-link" className="sublist-link">
                  Some Author
                </a>
              </li>
            </ul>
            </div>
          
          </li>

          {/* MAGAZINES ListItem */}
          <li className={`drawer-link${expandedItems[3] ? "expanded" : ""
  }`} 
              onClick={(e) => {
                e.preventDefault();
                toggleSublist(3);
              }}>
                <div className="drawer-item ">
                <a
              href="#"
              className="drawer-link"
            
            >
              MAGAZINES
            </a>
                </div>
           
            <div className="divider"></div>
            <div>
            <ul className={`sublist-item-style sublist${expandedItems[3] ? " expanded" : ""}`}>
              <li className="sublist-item">
                <a href="/genres/some-link" className="sublist-link">
                  Some Genre
                </a>
              </li>
              <li className="sublist-item">
                <a href="/genres/some-link" className="sublist-link">
                  Other Genre
                </a>
              </li>
            </ul>
            </div>
            
          </li>
          {/* About List Item */}
          <li   className={`drawer-link${expandedItems[4] ? "expanded" : ""
  }`} 
              onClick={(e) => {
                e.preventDefault();
                toggleSublist(4);
              }}>
           <div className="drawer-item ">
           <a
              href="#"
              className={'drawer-link drawer-link${expandedItems[4] ? "expanded" : ""}'}
              
            >
              ABOUT US
            </a>
           </div>
            <div className="divider"></div>
            <div>
            <ul className={`sublist-item-style sublist${expandedItems[4] ? " expanded" : ""}`}>
              <li className="sublist-item">
                <a href="/authors/some-link" className="sublist-link">
                  FOUNDATION
                </a>
              </li>
            </ul>
            </div>
          </li>

          {/* social Icons*/}
          <li>
          <ul className="drawer-item-icons">
                      <li  className="drawer-item-icons-element">
                        <a
                          href="https://twitter.com/inverbally"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="40"
                            height="40"
                          >
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </a>
                      </li>
                      <li className="drawer-item-icons-element">
                        <a
                          href="https://www.facebook.com/inverbally"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="40"
                            height="40"
                          >
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                          </svg>
                        </a>
                      </li>
                      <li className="drawer-item-icons-element">
                        <a
                          href="https://www.instagram.com/inverbally/"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            width="40"
                            height="40"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
          </li>
        </ul>
      </div>

    );
  };

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className="appbar"
        sx={{
          backgroundColor: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1, // Add this line
        }}
      >
        <Toolbar>
          {!isDesktop && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                flex: 1,
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ color: "#000", fontSize: "2rem" }}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 3,
                }}
              >
                <img
                  src="/YellowonBlack.png" // Replace this with the path to your logo image, relative to the `public` folder
                  alt="Logo"
                  style={{
                    height: "1.2625rem",
                    width: "auto",
                    marginRight: "1.0rem",
                  }}
                />
                <span className="c-txt c-txt_tag mix-txt_brand mix-txt_brand_pure">
                  <span style={{ color: "#dadaff" }}>I</span>
                  <span style={{ color: "#000" }}>n</span>
                  <span style={{ color: "#dadada78" }}>v</span>
                  <span style={{ color: "#000" }}>e</span>
                  <span style={{ color: "#dadada78" }}>r</span>
                  <span style={{ color: "#000" }}>b</span>
                  <span style={{ color: "#dadada78" }}>a</span>
                  <span style={{ color: "#000" }}>l</span>
                  <span style={{ color: "#dadada78" }}>l</span>
                  <span style={{ color: "#000" }}>y</span>


                </span>
              </div>
            </Box>
          )}

          {isDesktop && (
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "right",
                flexGrow: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <img
                  src="/YellowonBlack.png"
                  alt="Logo"
                  style={{
                    height: "1.6625rem",
                    width: "auto",
                    marginRight: "1.0rem",
                  }}
                />
                <span className="c-txt c-txt_tag mix-txt_brand mix-txt_brand_pure">
                  <span style={{ color: "#dadada78" }}>I</span>
                  <span style={{ color: "#000" }}>n</span>
                  <span style={{ color: "#dadada78" }}>v</span>
                  <span style={{ color: "#000" }}>e</span>
                  <span style={{ color: "#dadada78" }}>r</span>
                  <span style={{ color: "#000" }}>b</span>
                  <span style={{ color: "#dadada78" }}>a</span>
                  <span style={{ color: "#000" }}>l</span>
                  <span style={{ color: "#dadada78" }}>l</span>
                  <span style={{ color: "#000" }}>y</span>


                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "bottom",
                  flexGrow: 1,
                }}
              >
                <ul className={`c-primaryNav desktop-nav`} ref={menuRef}>
                  <li
                    onClick={(e) => handleMenuOpen(e, "poemsMenu")}
                    onBlur={(e: React.FocusEvent<HTMLLIElement>) => handleMenuClose(e)} // Add this line
                  >
                    <a href="#">POEMS</a>
                    <ul
                      className={activeMenu === "poemsMenu" ? "isActive" : ""}
                    >
                      <li>
                        <a href="/poems/some-link">Some Poem</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    onClick={(e) => handleMenuOpen(e, "authorsMenu")}
                    onBlur={(e: React.FocusEvent<HTMLLIElement>) => handleMenuClose(e)} // Add this line
                  >
                    <a href="#">AUTHORS</a>
                    <ul
                      className={activeMenu === "authorsMenu" ? "isActive" : ""}
                    >
                      <li>
                        <a href="/authors/some-link">Some Author</a>
                      </li>
                    </ul>
                  </li>
                  {/* <li onClick={(e) => handleMenuOpen(e, "genresMenu")}
                            onBlur={(e: React.FocusEvent<HTMLLIElement>) => handleMenuClose(e)} // Add this line
                            >
                              <a href="#">GENRES</a>
                              <ul
                                className={activeMenu === "genresMenu" ? "isActive" : ""}
                              >
                                <li>
                                  <a href="/genres/some-link">Some Genre</a>
                                  <a href="/genres/some-link">Other Genre</a>
                                </li>
                              </ul>
                            </li> */}
                  <li
                    onClick={(e) => handleMenuOpen(e, "jumbledMenu")}
                    onBlur={(e: React.FocusEvent<HTMLLIElement>) => handleMenuClose(e)} // Add this line
                  >
                    <a href="#">JUMBLED</a>
                    <ul
                      className={activeMenu === "jumbledMenu" ? "isActive" : ""}
                    >
                      <li>
                        <a href="/poems/some-link">Some Poem</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    onClick={(e) => handleMenuOpen(e, "bookReviewsMenu")}
                    onBlur={(e: React.FocusEvent<HTMLLIElement>) => handleMenuClose(e)} // Add this line
                  >
                    <a href="#">BOOK REVIEWS</a>
                    <ul
                      className={
                        activeMenu === "bookReviewsMenu" ? "isActive" : ""
                      }
                    >
                      <li>
                        <a href="/authors/some-link">Some Author</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    onClick={(e) => handleMenuOpen(e, "magazinesMenu")}
                    onBlur={(e: React.FocusEvent<HTMLLIElement>) => handleMenuClose(e)} // Add this line
                  >
                    <a href="#">
                      <i>Inverbally</i>{" "}
                      {activeMenu === "magazinesMenu" ? (
                        <ExpandLess
                          style={{ marginLeft: "0.0rem", fontSize: "1em" }}
                        />
                      ) : (
                        <ExpandMore
                          style={{ marginLeft: "0.0rem", fontSize: "1em" }}
                        />
                      )}
                    </a>

                    <ul
                      className={
                        activeMenu === "magazinesMenu" ? "isActive" : ""
                      }
                    >
                      <li>
                        <a href="/genres/some-link">Some Genre</a>
                        <br />
                        <a href="/genres/some-link">Other Genre</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
      {!isDesktop && (
        <nav>
          <Drawer
            anchor="top"
            open={drawerOpen} // Use the state variable here
            onClose={handleDropdownToggle}
            sx={{
              "& .MuiPaper-root": {
                width: "100%",
                height: "100%", // Change the height to "auto"
                overflowY: "auto",
                top: (theme) => theme.mixins.toolbar.minHeight,
              },
            }}
          >
            <Drawer2 />
          </Drawer>
        </nav>
      )}
      {/* <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Your Website
          </Typography>
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            className="cormorant-garamond"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Link href="/learn-more" passHref>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>
      </Container> */}
    </Box>
  );
};

export default AppBarComponent;
