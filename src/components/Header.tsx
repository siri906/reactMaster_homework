import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const Nav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-weight: 700;
`;
const Menu = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuItem = styled(motion.li)`
  position: relative;
  margin: 0 10px;
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  left: 50%;
  bottom: -8px;
  margin: 5px auto 0;
  border-radius: 50%;
  background: #f00;
`;

export default function Header() {
  const matchHome = useMatch("/");
  const matchComing = useMatch("/coming-soon");
  const matchPlaying = useMatch("/now-playing");

  return (
    <Nav>
      <Menu>
        <MenuItem>
          <Link to={"/"}>Popular {matchHome && <Circle layoutId="menu-circle" />}</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/coming-soon"}>Coming Soon{matchComing && <Circle layoutId="menu-circle" />}</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/now-playing"}>Now Playing{matchPlaying && <Circle layoutId="menu-circle" />}</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
}
