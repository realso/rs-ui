import Header from '../packages/header';
import TabItem from '../packages/tab-item';
import NavItem from '../packages/nav-item';
import Navbar from '../packages/navbar';
import Tabbar from '../packages/tabbar';
import Button from '../packages/button';

const version = '1.0.6';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component(Header.name, Header);
  Vue.component(TabItem.name, TabItem);
  Vue.component(NavItem.name, NavItem);
  Vue.component(Navbar.name, Navbar);
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(Button.name, Button);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  version,
  Header,
  TabItem,
  NavItem,
  Navbar,
  Tabbar,
  Button 
};