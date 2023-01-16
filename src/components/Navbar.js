// // styles

// // hooks
// import { useAuthContext } from "../hooks/useAuthContext";
// import { useLogout } from "../hooks/useLogout";
// // // component
// // import { Link } from "react-router-dom";
// import { useNavigate } from "react-router";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faBell as faFaBell } from "@fortawesome/free-solid-svg-icons";
// import { faBars as faBarss } from "@fortawesome/free-solid-svg-icons";

// import { useState } from "react";
// library.add(faFaBell,faBarss);

// export default function Navbar() {
// 	const { user } = useAuthContext();
// 	const { logout } = useLogout();
// 	const Navigate = useNavigate();
// 	const [showNotification, setShowNotification] = useState(null);

// 	return (
// 		<nav className="navbar">
// 			<ul>
// 				<li className="title">
// 					<Link to="/" style={{color:'#006'}}>Med<span style={{color:'orange'}}>Cure</span></Link>
// 				</li>

// {!user && (
// 	<>
// 	<li><div className="dropdown">
// 			<button className="dropbtn">Login/SignUp</button>
// 			<div className="dropdown-content">
// 				<Link className="d" to="/doctor-signup">
// 					Doctor
// 				</Link>

// 				<Link className="d" to="/patient-signup">
// 					Patient
// 				</Link>
// 			</div>
// 		</div>
// 		</li>
// 	</>
// )}
// 				{user && (
// 					<>
// 						<li style={{ color: "#006" }}>
// 							{" "}
// 							Hello,
// 							<span
// 								style={{ color: "orange" }}
// 							>{`${user.displayName}`}</span>
// 						</li>
// 						<li>
// 							<img className="profile" src={user.photoURL} alt="profile" />
// 						</li>
// 						<li>
// 							<button className="logout" onClick={logout}>
// 								Logout
// 							</button>
// 						</li>
// 						<li>
// 							<button
// 								className="bell"
// 								onClick={() => Navigate("/notification")}
// 							>
// 								<FontAwesomeIcon icon={faFaBell} className='bell-icon' />
// 							</button>
// 						</li>
// 						{/* <li className="faBarss"><FontAwesomeIcon icon={faBarss}/></li> */}
// 					</>
// 				)}
// 			</ul>
// 		</nav>
// 	);
// }
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell as faFaBell } from "@fortawesome/free-solid-svg-icons";
import { faBars as faBarss } from "@fortawesome/free-solid-svg-icons";
import Stack from "@mui/material/Stack";
library.add(faFaBell, faBarss);

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const Navigate = useNavigate();
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <AppBar position="static" sx={{ background: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#006",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ color: "#006", textDecoration: "none" }}>
              Med<span style={{ color: "orange" }}>Cure</span>
            </Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#006",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ color: "#006", textDecoration: "none" }}>
              Med<span style={{ color: "orange" }}>Cure</span>
            </Link>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {!user && (
              <>
                <li>
                  <div className="dropdown">
                    <button className="dropbtn">Login/SignUp</button>
                    <div className="dropdown-content">
                      <Link className="d" to="/doctor-signup">
                        Doctor
                      </Link>

                      <Link className="d" to="/patient-signup">
                        Patient
                      </Link>
                    </div>
                  </div>
                </li>
              </>
            )}

            {user && (
              <>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "#006", marginRight: "20px", marginTop: "13px" }}
                >
                  Hello,
                  <span
                    style={{ color: "orange" }}
                  >{`${user.displayName}`}</span>
                </Typography>
                <Stack sx={{ marginRight: "20px", marginTop: "13px" }}>
                  <Avatar src={user.photoURL} alt="profile" />
                </Stack>
                <Button
                  className="logout"
                  onClick={logout}
                  sx={{
                    my: 2,
                    color: "white",
                    backgroundColor: "#006",
                    display: "block",
                    marginRight: "20px",
                    borderRadius: "10px",
                  }}
                >
                  logout
                </Button>
                <Button
                  className="bell"
                  onClick={() => Navigate("/notification")}
                  sx={{
                    my: 2,
                    color: "white",
                    background: "#006",
                    display: "block",
                    borderRadius: "10px",
                  }}
                >
                  <FontAwesomeIcon icon={faFaBell} className="bell-icon" />
                </Button>
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: -2, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#006" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingBottom: "70px",
                }}
              >
                {!user && (
                  <>
                    <div className="dropdown">
                      <button className="dropbtn">Login/SignUp</button>
                      <div
                        className="dropdown-content"
                        onClick={handleCloseNavMenu}
                      >
                        <Link className="d" to="/doctor-signup">
                          Doctor
                        </Link>
                        <Link className="d" to="/patient-signup">
                          Patient
                        </Link>
                      </div>
                    </div>
                  </>
                )}

                {user && (
                  <>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{ color: "#006", padding: "10px", marginTop: "13px" }}
                    >
                      Hello,
                      <span
                        style={{ color: "orange" }}
                      >{`${user.displayName}`}</span>
                    </Typography>
                    <Stack sx={{ marginTop: "13px", marginLeft: "60px" }}>
                      <Avatar src={user.photoURL} alt="profile" />
                    </Stack>
                    <Button
                      className="logout"
                      onClick={logout}
                      sx={{
                        my: 2,
                        color: "white",
                        backgroundColor: "#006",
                        display: "block",
                        width: "100px",
                        borderRadius: "10px",
                        marginLeft: "40px",
                      }}
                    >
                      logout
                    </Button>
                    <Button
                      className="bell"
                      onClick={() => Navigate("/notification")}
                      sx={{
                        my: 2,
                        color: "white",
                        background: "#006",
                        display: "block",
                        borderRadius: "10px",
                        marginLeft: "40px",
                        width: "100px",
                      }}
                    >
                      <FontAwesomeIcon icon={faFaBell} className="bell-icon" />
                    </Button>
                  </>
                )}
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
