import React, { useState } from "react";
import "./Sidebar.css";
const menuItems = [
  {
    name: "Home",
    icon: "home",
  },
  {
    name: "Apps",
    icon: "apps",
  },
  {
    name: "Create",
    icon: "add_box",
  },
  {
    name: "Profile",
    icon: "person",
  },
  {
    name: "Products",
    icon: "inventory_2",
  },
  {
    name: "Favourites",
    icon: "favorite",
  },
  {
    name: "Search",
    icon: "search",
  },
  {
    name: "Users",
    icon: "person",
  },
];
const tabs = ["menu", "lock", "settings"];
const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);
const NavHeader = ({ activeTab, onTabClicked }) => (
  <header className="sidebar-header">
    {tabs.map((tab, index) => (
      <button
        key={tab}
        type="button"
        onClick={() => onTabClicked(index)}
        className={`${activeTab === index ? "active" : ""}`}
      >
        <Icon icon={tab} />
      </button>
    ))}
    <div
      className="underline"
      style={{
        translate: `${activeTab * 100}% 0`,
      }}
    />
  </header>
);
const NavButton = ({ name, icon }) => (
  <button type="button">
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
  </button>
);
const Tab = ({ children, isActive }) => {
  return <div className={isActive ? "active" : ""}>{children}</div>;
};

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0) ;

  const handleTabClicked = (tab) => {
    setActiveTab(tab);
  };
  return (
    <aside className="sidebar">
      <div>
        <NavHeader activeTab={activeTab} onTabClicked={handleTabClicked} />
        <div className="tabs">
          <Tab isActive={activeTab === 0}>
            <div>
              {menuItems.map((item,index) => (
                <NavButton key={index} name={item.name} icon={item.icon} />
              ))}
            </div>
          </Tab>
          <Tab isActive={activeTab === 1}>
            <div>
              <form>
                <div className="textbox">
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                  <input placeholder="Name" type="text" required />
                </div>
                <div className="textbox">
                  <span className="material-symbols-outlined">lock</span>
                  <input placeholder="Password" type="password" required />
                </div>
                <div className="textbox">
                  <span className="material-symbols-outlined">email</span>
                  <input placeholder="Email" type="text" required />
                </div>
              </form>
            </div>
          </Tab>
          <Tab isActive={activeTab === 2}>
            <div>
              <form>
                <div className="row">
                  <div className="switch-label">Dark Mode</div>
                  <span className="switch">
                    <input id="switch-round-1" type="checkbox" />
                    <label htmlFor="switch-round-1"></label>
                  </span>
                </div>
                <div className="row">
                  <div className="switch-label">Accessibility Mode</div>
                  <span className="switch">
                    <input id="switch-round-2" type="checkbox" />
                    <label htmlFor="switch-round-2"></label>
                  </span>
                </div>
                <div className="row">
                  <div className="switch-label">Quirks Mode</div>
                  <span className="switch">
                    <input id="switch-round-3" type="checkbox" />
                    <label htmlFor="switch-round-3"></label>
                  </span>
                </div>
              </form>
            </div>
          </Tab>
        </div>
      </div>
    </aside>
  );
};
