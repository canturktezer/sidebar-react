import {
  BiGridAlt,
  BiMenu,
  BiSearch,
  BiUser,
  BiChat,
  BiPieChartAlt2,
  BiFolder,
  BiCartAlt,
  BiHeart,
  BiCog,
  BiX,
} from "react-icons/bi";
import { useState } from "react";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const closeBtnIcon = openSidebar ? <BiX /> : <BiMenu />;

  return (
    <div className={`Sidebar ${openSidebar ? "Open" : ""}`}>
      <div className="Logo-box">
        <i id="btn" onClick={toggleSidebar}>
          {closeBtnIcon}
        </i>
      </div>
      <ul className="Nav-list">
        <li>
          <a href="#" className="Search-a">
            <i className="Search" onClick={toggleSidebar}>
              <BiSearch />
            </i>
            <input type="text" placeholder="Search..." />
            <span className="Tooltiptext">Search</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              <BiGridAlt />
            </i>
            <span className="Link-tag">Dashboard</span>
          </a>
          <span className="Tooltiptext">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <i>
              <BiUser />
            </i>
            <span className="Link-tag">User</span>
          </a>
          <span className="Tooltiptext">User</span>
        </li>
        <li>
          <a href="#">
            <i>
              <BiChat />
            </i>
            <span className="Link-tag">Messages</span>
          </a>
          <span className="Tooltiptext">Messages</span>
        </li>
        <li>
          <a href="#">
            <i>
              <BiPieChartAlt2 />
            </i>
            <span className="Link-tag">Analytics</span>
          </a>
          <span className="Tooltiptext">Analytics</span>
        </li>
        <li>
          <a href="#">
            <i>
              <BiFolder />
            </i>
            <span className="Link-tag">File Manager</span>
          </a>
          <span className="Tooltiptext">File Manager</span>
        </li>
        <li>
          <a href="#">
            <i>
              <BiCartAlt />
            </i>
            <span className="Link-tag">Order</span>
          </a>
          <span className="Tooltiptext">Order</span>
        </li>
        <li>
          <a href="#">
            <i>
              <BiHeart />
            </i>
            <span className="Link-tag">Saved</span>
          </a>
          <span className="Tooltiptext">Saved</span>
        </li>
        <li>
          <a href="#">
            <i>
              <BiCog />
            </i>
            <span className="Link-tag">Setting</span>
          </a>
          <span className="Tooltiptext">Setting</span>
        </li>
      </ul>
    </div>
  );
}
