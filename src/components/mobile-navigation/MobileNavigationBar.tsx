import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Icon from "../icon/Icon";
import NavLink from "../nav-link/NavLink";
import StyledMobileNavigationBar from "./MobileNavigationBar.style";

const MobileNavigationBar: React.FC = () => {
  const width = useWindowSize();

  return (
    width <= 900 && (
      <StyledMobileNavigationBar>
        {list.map((item) => (
          <NavLink className="link" href={item.href} key={item.title}>
            <Icon className="icon" variant="large">
              {item.icon}
            </Icon>
          </NavLink>
        ))}
      </StyledMobileNavigationBar>
    )
  );
};

const list = [
  {
    title: "Home",
    icon: "home",
    href: "/ecgoathome",
  },
  {
    title: "Category",
    icon: "category",
    href: "/mobile-category-nav",
  },
  {
    title: "Account",
    icon: "user-2",
    href: "/profile",
  },
];

export default MobileNavigationBar;
