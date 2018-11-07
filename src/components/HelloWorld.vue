<template>
  <div class="hello" style="height: calc(100% - 50px)">
    <rs-header title="我是标题" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
      <div slot="right">
        <rs-button type="white" link=true>编辑</rs-button>
        <rs-button type="white" link=true>提交</rs-button>
      </div>
    </rs-header>
    <!-- 底部选项开始 -->
    <rs-tab-container v-model="tabbar">
      <!-- 工作台开始 -->
      <rs-tab-container-item id="工作台">
        <rs-swipe :listImg="listImg"></rs-swipe>
        <rs-grid border=true>
          <rs-grid-item v-for="item in navs" :path="item.path" :key="item.id">
            <span slot="icon" :class="item.icon"></span>
            {{item.name}}
          </rs-grid-item>
        </rs-grid>
      </rs-tab-container-item>
      <!-- 工作台结束 -->
      <!-- 报表查询开始 -->
      <rs-tab-container-item id="报表查询" v-for="items in yuangong" :key="items.id">
        <div class="title" v-text="items.title"></div>
        <rs-list size="15">
          <rs-list-item v-for="item in items.list" :path="item.path" isright=true :key="item.id">
            {{item.name}}
          </rs-list-item>
        </rs-list>
        <rs-list>
          <rs-medialist-item isright=true>
            <img slot="left" class="mui-media-object mui-pull-left" src="../assets/logo.png">
            幸福
          </rs-medialist-item>
        </rs-list>
      </rs-tab-container-item>
      <!-- 报表查询结束 -->
      <!-- 消息开始 -->
      <rs-tab-container-item id="消息">
        <rs-navbar v-model="selected">
          <rs-nav-item id="订单">
            订单
          </rs-nav-item>
          <rs-nav-item id="我的">
            我的
          </rs-nav-item>
        </rs-navbar>
        <rs-tab-container v-model="selected">
          <rs-tab-container-item id="订单"> 订单 </rs-tab-container-item>
          <rs-tab-container-item id="我的">
              <rs-button size="large" >大的按钮</rs-button>
              <rs-button size="normal">普通按钮</rs-button>
              <rs-button size="small">小的按钮</rs-button>
              <span @click="openConfirm">openConfirm</span>
          </rs-tab-container-item>
        </rs-tab-container>
      </rs-tab-container-item>
      <!-- 消息结束 -->
      <!-- 我的开始 -->
      <rs-tab-container-item id="我的">
        <rs-card type="default">
          <span slot="header">页眉</span>
          <span slot="content">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</span>
          <span slot="footer">页脚</span>
        </rs-card>

      </rs-tab-container-item>
      <!-- 我的结束 -->
    </rs-tab-container>
    <!-- 底部选项卡结束 -->
    <rs-tabbar v-model="tabbar">
      <rs-tab-item id="工作台">
        <span slot="icon" class="mui-icon mui-icon-home"></span>
        工作台
      </rs-tab-item>
      <rs-tab-item id="报表查询">
        <span slot="icon" class="mui-icon mui-icon-home"></span>
        报表查询
      </rs-tab-item>
      <rs-tab-item id="消息">
        <span slot="icon" class="mui-icon mui-icon-home"></span>
        消息
      </rs-tab-item>
      <rs-tab-item id="我的">
        <span slot="icon" class="mui-icon mui-icon-home"></span>
        我的
      </rs-tab-item>
    </rs-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      selected: '我的',
      tabbar: '工作台',
      listImg: [
        {
          'url': require('../assets/img/muwu.jpg'),
          'path': '/baobiaochaxun'
        },
        {
          'url': require('../assets/img/shuijiao.jpg'),
          'path': '/MessageBox'
        }
      ],
      navs: [
        {
          'path': '/baobiaochaxun',
          'icon': 'mui-icon mui-icon-home',
          'name': 'home'
        },
        {
          'path': '/baobiaochaxun',
          'icon': 'mui-icon mui-icon-email',
          'name': 'Email'
        },
        {
          'path': '/baobiaochaxun',
          'icon': 'mui-icon mui-icon-chatbubble',
          'name': 'chat'
        },
        {
          'path': '/baobiaochaxun',
          'icon': 'mui-icon mui-icon-location',
          'name': 'location'
        },
        {
          'path': '/baobiaochaxun',
          'icon': 'mui-icon mui-icon-search',
          'name': 'search'
        },
        {
          'path': '/baobiaochaxun',
          'icon': 'mui-icon mui-icon-phone',
          'name': 'phone'
        },
        {
          'path': '/baobiaochaxun',
          'icon': 'mui-icon mui-icon-gear',
          'name': 'setting'
        },
        {
          'path': '/baobiaochaxun',
          'icon': 'mui-icon mui-icon-info',
          'name': 'about'
        },
        {
          'path': '/baobiaochaxun',
          'icon': 'mui-icon mui-icon-more',
          'name': 'more'
        }
      ],
      yuangong: [
        {
          'title': '员工',
          'list': [
            {
              'path': '/baobiaochaxun',
              'name': '我的一天'
            },
            {
              'path': '/MessageBox',
              'name': '员工行程'
            }
          ]
        }
      ]
    }
  },
  components: {},
  created () {
  },
  methods: {
    openConfirm () {
      this.$messagebox({
        title: '温馨提示',
        message: '订单支付成功',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(action => {
        if (action === 'confirm') {
          console.log('确定')
        } else {
          console.log('取消')
        }
      })
      // MessageBox.alert('确定执行此操作?', '提示')
      // this.$messageBox.confirm('确定执行此操作?').then(action => {
      //   console.log('1')
      // })
      // this.$messageBox.alert('确定执行此操作?', '提示')
    }
  }
}
</script>
