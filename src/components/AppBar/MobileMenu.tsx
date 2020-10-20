import React from 'react';
import { StyledMenu } from './NavBar.style';
import MapIcon from 'assets/images/mapIconTwoTone';
import FAQIcon from 'assets/images/faqIconTwoTone';
import BlogIcon from 'assets/images/blogIconTwoTone';
import palette from 'assets/theme/palette';

import { Link } from 'react-router-dom';

const MobileMenu: React.FC<{ open: boolean; closeMenu: () => void }> = ({
  open,
  closeMenu,
}) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={closeMenu}>
        <MapIcon color={palette.secondary.main} />
        <span>Map</span>
      </Link>
      <Link to="/about" onClick={closeMenu}>
        <FAQIcon color={palette.secondary.main} />
        <span>About</span>
      </Link>
      <Link to="/resources" onClick={closeMenu}>
        <FAQIcon color={palette.secondary.main} />
        <span>Resources</span>
      </Link>
      <a href="https://blog.covidactnow.org" onClick={closeMenu}>
        <BlogIcon color={palette.secondary.main} />
        <span>Blog</span>
      </a>
      <Link to="/contact" onClick={closeMenu}>
        <FAQIcon color={palette.secondary.main} />
        <span>Contact Us</span>
      </Link>
    </StyledMenu>
  );
};

export default MobileMenu;
