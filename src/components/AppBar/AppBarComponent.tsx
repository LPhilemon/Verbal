import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@material-ui/core/Divider";

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
  const menuRef = useRef(null);
  const [openMagazines2, setOpenMagazines2] = React.useState(false);
  const [openAuthors, setOpenAuthors] = React.useState(false);
  const [openJumbled, setOpenJumbled] = React.useState(false);
  const [openBookReviews, setOpenBookReviews] = React.useState(false);
  const [expanded, setExpanded] = useState('')
  const handleMenuOpen = (event, menuId) => {
    if (activeMenu === menuId) {
      setActiveMenu("");
    } else {
      setActiveMenu(menuId);
    }
  };
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActiveMenu("");
    }
  };
  const [openMagazines, setOpenMagazines] = React.useState(false);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
  const handleMenuClose = (event) => {
    event.currentTarget.blur();
    handleClickOutside;
  };

  const handleDropdownToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (dropdownAnchor) {
      setDropdownAnchor(null);
    } else {
      setDropdownAnchor(event.currentTarget);
    }
  };
  
 
  const handleClicker = (item) => {
    if (expanded === item) {
      setExpanded("");
    } else {
      setExpanded(item);
    }
  };
  const isExpanded = (item) => expanded === item;
  const closeButton = (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerToggle} // Add onClick handler here
      sx={{
        position: "absolute",
        right: "8px",
        top: "8px",
        color: "#000", // Change the color to black
        fontSize: "3rem", // Add fontSize here
      }}
    >
      <CloseIcon />
    </IconButton>
  );

  // mobile handlers

  

 

  const Drawer2 = () => {
    const [expandedItem, setExpandedItem] = useState(-1);
  
    const toggleSublist = (index) => {
      if (expandedItem === index) {
        setExpandedItem(-1);
      } else {
        setExpandedItem(index);
      }
    };
  
    return (
      <div className="drawer">
        
        <ul className="drawer-list">
          {/* AUTHORS ListItem */}
          <li className="drawer-item">
            <a
              href="#"
              className="drawer-link"
              onClick={(e) => {
                e.preventDefault();
                toggleSublist(0);
              }}
            >
              AUTHORS
            </a>
            <div className="divider"></div>
            <ul className={`sublist${expandedItem === 0 ? " expanded" : ""}`}>
              <li className="sublist-item">
                <a href="/authors/some-link" className="sublist-link">
                  Some Author
                </a>
              </li>
            </ul>
          </li>
             
          {/* JUMBLED ListItem */}
          <li className="drawer-item">
            <a
              href="#"
              className="drawer-link"
              onClick={(e) => {
                e.preventDefault();
                toggleSublist(1);
              }}
            >
              JUMBLED
            </a>
            <div className="divider"></div>
            <ul className={`sublist${expandedItem === 1 ? " expanded" : ""}`}>
              <li className="sublist-item">
                <a href="/poems/some-link" className="sublist-link">
                  Some Poem
                </a>
              </li>
            </ul>
          </li>
          
          {/* BOOK REVIEWS ListItem */}
          <li className="drawer-item">
            <a
              href="#"
              className="drawer-link"
              onClick={(e) => {
                e.preventDefault();
                toggleSublist(2);
              }}
            >
              BOOK REVIEWS
            </a>
            <div className="divider"></div>
            <ul className={`sublist${expandedItem === 2 ? " expanded" : ""}`}>
              <li className="sublist-item">
                <a href="/authors/some-link" className="sublist-link">
                  Some Author
                </a>
              </li>
            </ul>
          </li>
        
          {/* MAGAZINES ListItem */}
          <li className="drawer-item">
            <a
              href="#"
              className="drawer-link"
              onClick={(e) => {
                e.preventDefault();
                toggleSublist(3);
              }}
            >
              MAGAZINES
            </a>
            <div className="divider"></div>
            <ul className={`sublist${expandedItem === 3 ? " expanded" : ""}`}>
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
          </li>
        </ul>
      </div>
      
    );
  };
 
  //   const menuContent = (
  //     <ul   style={{ listStyleType: 'none' }}>
  //   <li onClick={handleClick}>
  //   <a>
  //     Poems and Poets
  //   </a>
  //   </li>
  //   {/* Add more list items here */}
  // </ul>

  //   );

//   const mobileMenuContent = (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '10px 10px',
//       }}
//     >
//       <List sx={{ width: '100%', padding: '10px 0' }}>
//         {/* Existing POEMS ListItem */}
//         <Divider sx={{ my: 1, borderColor: 'grey.500' }} />
  
//         {/* AUTHORS ListItem */}
//         <ListItem
//           button
//           onClick={handleClickAuthors}
//           sx={{
//             padding: '0px 0px',
//             '&:hover': {
//               backgroundColor: 'transparent',
//             },
//           }}
//         >
//           <CustomListItemText
//             primary="AUTHORS"
//             primaryTypographyProps={{ variant: 'body1' }}
//             className={openAuthors ? 'Mui-selected' : ''}
//           />
//           {openAuthors ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
  
//         <Divider sx={{ my: 1, borderColor: 'grey.500' }} />
  
//         <Collapse
//           in={openAuthors}
//           timeout="auto"
//           unmountOnExit
//           sx={{
//             '& .MuiList-root': {
//               padding: '0',
//               width: 'auto',
//             },
//           }}
//         >
//           <List component="div">
//             <Link href="/authors/some-link" passHref>
//               <ListItem button>
//                 <SubListItemText primary="Some Author" />
//               </ListItem>
//             </Link>
//           </List>
//         </Collapse>
//         <Divider sx={{ my: 1, borderColor: 'grey.500' }} />
  
//         {/* JUMBLED ListItem */}
//         <ListItem
//           button
//           onClick={handleClickJumbled}
//           sx={{
//             padding: '0px 0px',
//             '&:hover': {
//               backgroundColor: 'transparent',
//             },
//           }}
//         >
//           <CustomListItemText
//             primary="JUMBLED"
//             primaryTypographyProps={{ variant: 'body1' }}
//             className={openJumbled ? 'Mui-selected' : ''}
//           />
//           {openJumbled ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Divider sx={{ my: 1, borderColor: 'grey.500' }} />
//         <Collapse
//           in={openJumbled}
//           timeout="auto"
//           unmountOnExit
//           sx={{
//             '& .MuiList-root': {
//               padding: '0',
//               width: 'auto',
//             },
//           }}
//         >
//           <List component="div">
//             <Link href="/poems/some-link" passHref>
//             <ListItem button>
//           <SubListItemText primary="Some Poem" />
//         </ListItem>
//       </Link>
//     </List>
//   </Collapse>
//   <Divider sx={{ my: 1, borderColor: 'grey.500' }} />

//   {/* BOOK REVIEWS ListItem */}
//   <ListItem
//     button
//     onClick={handleClickBookReviews}
//     sx={{
//       padding: '0px 0px',
//       '&:hover': {
//         backgroundColor: 'transparent',
//       },
//     }}
//   >
//     <CustomListItemText
//       primary="BOOK REVIEWS"
//       primaryTypographyProps={{ variant: 'body1' }}
//       className={openBookReviews ? 'Mui-selected' : ''}
//     />
//     {openBookReviews ? <ExpandLess /> : <ExpandMore />}
//   </ListItem>
//   <Divider sx={{ my: 1, borderColor: 'grey.500' }} />

//   <Collapse
//     in={openBookReviews}
//     timeout="auto"
//     unmountOnExit
//     sx={{
//       '& .MuiList-root': {
//         padding: '0',
//         width: 'auto',
//       },
//     }}
//   >
//     <List component="div">
//       <Link href="/authors/some-link" passHref>
//         <ListItem button>
//           <SubListItemText primary="Some Author" />
//         </ListItem>
//       </Link>
//     </List>
//   </Collapse>

//   <Divider sx={{ my: 1, borderColor: 'grey.500' }} />

//   {/* MAGAZINES ListItem */}
//   <ListItem
//     button
//     onClick={handleClickMagazines}
//     sx={{
//       padding: '0px 0px',
//       '&:hover': {
//         backgroundColor: 'transparent',
//       },
//     }}
//   >
//     <CustomListItemText
//       primary="MAGAZINES"
//       primaryTypographyProps={{ variant: 'body1' }}
//       className={openMagazines ? 'Mui-selected' : ''}
//     />
//     {openMagazines ? <ExpandLess /> : <ExpandMore />}
//   </ListItem>
//   <Divider sx={{ my: 1, borderColor: 'grey.500' }} />
//   <Collapse
//     in={openMagazines}
//     timeout="auto"
//     unmountOnExit
//     sx={{
//       '& .MuiList-root': {
//         padding: '0',
//         width: 'auto',
//       },
//     }}
//   >
//     <List component="div">
//       <Link href="/genres/some-link" passHref>
//         <ListItem button>
//           <SubListItemText primary="Some Genre" />
//         </ListItem>
//       </Link>
//       <Link href="/genres/some-link" passHref>
//         <ListItem button>
//           <SubListItemText primary="Other Genre" />
//         </ListItem>
//       </Link>
//     </List>
//   </Collapse>
//   <Divider sx={{ my: 1, borderColor: 'grey.500' }} />
// </List>

//   </Box>
// );

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
                    height: "2.0625rem",
                    width: "auto",
                    marginRight: "1.0rem",
                  }}
                />
                <span className="c-txt c-txt_tag mix-txt_brand mix-txt_brand_pure">
                <span style={{color: "#ffc030"}}>I</span>
<span style={{color: "#000"}}>n</span>
<span style={{color: "#ffc030"}}>v</span>
<span style={{color: "#000"}}>e</span>
<span style={{color: "#ffc030"}}>r</span>
<span style={{color: "#000"}}>b</span>
<span style={{color: "#ffc030"}}>a</span>
<span style={{color: "#000"}}>l</span>
<span style={{color: "#ffc030"}}>l</span>
<span style={{color: "#000"}}>y</span>


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
                  src="/yellowonBlack.png"
                  alt="Logo"
                  style={{
                    height: "3.0rem",
                    width: "auto",
                    marginRight: "1.0rem",
                  }}
                />
                <span className="c-txt c-txt_tag mix-txt_brand mix-txt_brand_pure">
                <span style={{color: "#ffc030"}}>I</span>
<span style={{color: "#000"}}>n</span>
<span style={{color: "#ffc030"}}>v</span>
<span style={{color: "#000"}}>e</span>
<span style={{color: "#ffc030"}}>r</span>
<span style={{color: "#000"}}>b</span>
<span style={{color: "#ffc030"}}>a</span>
<span style={{color: "#000"}}>l</span>
<span style={{color: "#ffc030"}}>l</span>
<span style={{color: "#000"}}>y</span>


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
                    onBlur={(e) => handleMenuClose(e)} // Add this line
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
                    onBlur={(e) => handleMenuClose(e)} // Add this line
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
                            onBlur={(e) => handleMenuClose(e)} // Add this line
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
                    onBlur={(e) => handleMenuClose(e)} // Add this line
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
                    onBlur={(e) => handleMenuClose(e)} // Add this line
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
                    onBlur={(e) => handleMenuClose(e)} // Add this line
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
      <Container maxWidth="lg">
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
      </Container>
    </Box>
  );
};

export default AppBarComponent;
