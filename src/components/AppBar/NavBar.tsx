import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'assets/images/logo';
import ArrowBack from '@material-ui/icons/ArrowBack';
import * as Style from './NavBar.style';
import MobileMenu from './MobileMenu';
import { DonateButtonWithoutFade, DonateButtonWithFade } from './DonateButton';

const isLocationPage = (pathname: string) => pathname.includes('/us');

const isHomePage = (pathname: string) =>
  ['/', '/alert_signup', '/compare'].includes(pathname);

const NavBar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // We only fade the donate button on the home page on mobile, where the donate
  // button doesn't appear until the banner is scrolled away.
  const { pathname } = useLocation();
  const MobileDonateButton = isHomePage(pathname)
    ? DonateButtonWithFade
    : DonateButtonWithoutFade;

  return (
    <Style.AppBar position="sticky" color="transparent" elevation={0}>
      <Style.Toolbar>
        {isLocationPage(pathname) && (
          <Style.BackLink to="/">
            <ArrowBack />
          </Style.BackLink>
        )}
        <Link to="/" style={{ display: 'inline-flex' }}>
          <Logo />
        </Link>
        <Style.Spacer />
        <Style.DesktopOnly>
          <Style.NavLink
            to="/"
            key="map"
            activeClassName="active"
            isActive={(match, { pathname }) => isHomePage(pathname)}
          >
            Map
          </Style.NavLink>
          <Style.NavLink to="/about" key="about" activeClassName="active">
            About
          </Style.NavLink>
          <Style.NavLink
            to="/resources"
            key="resources"
            activeClassName="active"
          >
            Resources
          </Style.NavLink>
          <Style.TabLink href="https://blog.covidactnow.org" key="blog">
            Blog
          </Style.TabLink>
          <Style.NavLink to="/contact" key="contact" activeClassName="active">
            Contact Us
          </Style.NavLink>
          <DonateButtonWithoutFade />
        </Style.DesktopOnly>
        <Style.MobileOnly>
          <Style.StyledMobileMenu>
            <MobileDonateButton />
            <Style.IconButton
              onClick={() => setMenuOpen(!isMenuOpen)}
              edge="end"
            >
              {isMenuOpen ? <Style.CloseIcon /> : <Style.MenuIcon />}
            </Style.IconButton>
          </Style.StyledMobileMenu>
          <MobileMenu open={isMenuOpen} closeMenu={closeMenu} />
        </Style.MobileOnly>
      </Style.Toolbar>
    </Style.AppBar>
  );
};

export default NavBar;
