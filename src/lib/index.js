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
import Grid from '../packages/grid'
import GridItem from '../packages/grid-item'
import Card from '../packages/card'
import Popup from '../packages/popup'
import MessageBox from '../packages/message-box'
import Search from '../packages/search'
import Tip from '../packages/tip'
// import InfiniteScroll from '../packages/infinite-scroll';
import Lazyload from '../packages/lazyload'
import NumInput from '../packages/numInput'
// import Toast from '../packages/toast';
// import Indicator from '../packages/indicator';
import merge from '../utils/merge'

const version = '1.0.18'
const install = function(Vue, config = {}) {
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
    Vue.component(Grid.name, Grid)
    Vue.component(GridItem.name, GridItem)
    Vue.component(Card.name, Card)
    Vue.component(Popup.name, Popup)
    Vue.component(Search.name, Search)
    Vue.component(Tip.name, Tip)
    Vue.component(NumInput.name, NumInput)
        // Vue.component(MessageBox.name, MessageBox)
        // Vue.use(InfiniteScroll);
    Vue.use(Lazyload, merge({
        loading: require('../assets/loading-spin.svg'),
        attempt: 3
    }, config.lazyload))

    Vue.$messagebox = Vue.prototype.$messagebox = MessageBox
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
    MedialistItem,
    Grid,
    GridItem,
    Card,
    Popup,
    // Toast,
    // Indicator,
    MessageBox,
    Search,
    Tip,
    NumInput,
    // InfiniteScroll
    Lazyload
}