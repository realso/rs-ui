import Header from '../packages/header'
import TabItem from '../packages/tab-item'
import NavItem from '../packages/nav-item'
import Navbar from '../packages/navbar'
import Tabbar from '../packages/tabbar'
import Button from '../packages/button'
import Tabcontainer from '../packages/tab-container'
import Tabcontaineritem from '../packages/tab-container-item'
import Spinner from '../packages/spinner'
import Loadmore from '../packages/loadmore'
import List from '../packages/list'
import ListItem from '../packages/list-item'
import MedialistItem from '../packages/medialist-item'
// import MessageBox from '../packages/message-box';
// import InfiniteScroll from '../packages/infinite-scroll';
// import Lazyload from '../packages/lazyload';
// import Toast from '../packages/toast';
// import Indicator from '../packages/indicator';
// import merge from './utils/merge';

const version = '1.0.6'
const install = function (Vue) {
  if (install.installed) return

  Vue.component(Header.name, Header)
  Vue.component(TabItem.name, TabItem)
  Vue.component(NavItem.name, NavItem)
  Vue.component(Navbar.name, Navbar)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(Button.name, Button)
  Vue.component(Tabcontainer.name, Tabcontainer)
  Vue.component(Tabcontaineritem.name, Tabcontaineritem)
  Vue.component(Spinner.name, Spinner)
  Vue.component(Loadmore.name, Loadmore)
  Vue.component(List.name, List)
  Vue.component(ListItem.name, ListItem)
  Vue.component(MedialistItem.name, MedialistItem)
  // Vue.use(InfiniteScroll);
  // Vue.use(Lazyload, merge({
  //   loading: require('../assets/loading-spin.svg'),
  //   attempt: 3
  // }, config.lazyload));

  // Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  // Vue.$toast = Vue.prototype.$toast = Toast;
  // Vue.$indicator = Vue.prototype.$indicator = Indicator;
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version,
  Header,
  TabItem,
  NavItem,
  Navbar,
  Tabbar,
  Button,
  Tabcontainer,
  Tabcontaineritem,
  Spinner,
  Loadmore,
  List,
  ListItem,
  MedialistItem
  // Toast,
  // Indicator,
  // MessageBox,
  // InfiniteScroll
  // Lazyload,
}
