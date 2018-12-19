<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="按钮button" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>注意：rs-field需要放在rs-list内，等同于rs-list-item位置</h5>
        <h5>
            类型：type {string} [type="text"] 默认为文字输入框，可取值label, text, data, time, datetime, textarea, number, password等<br/>
            右侧是否有箭头表示选择：isright 默认无右侧箭头，加上isright为有右侧箭头<br/>
            是否有边框：noborder 默认有边框，加上noborder为无边框<br/>
            左侧提示：label {string} [label="姓 名"] 文字中间需要加空格<br/>
            左侧提示宽度：width {number} [width=5], 默认为4(单位为em) 可取值3,4,5,6<br/>
            值：text {String}<br/>
            清除按钮的事件：clearClick @clearClick="SNODECODE=''"<br/>
            例如：&lt;rs-field type="label" noborder isright label="经 营 门 店" v-model.lazy='SNODEID' :text='this["SNODEID.SNODECODE"]+ " " +this["SNODEID.SNODENAME"]'&gt;&lt;/rs-field&gt;
        </h5>
        <h5 style="color:#f00">type="label" 不能输入</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="label"
            isright 
            label="经 营 门 店"
            v-model.lazy='SNODEID' 
            :text='this["SNODEID.SNODECODE"]+ " " +this["SNODEID.SNODENAME"]' 
            >
            </rs-field>
        </rs-list>
        <h5 style="color:#f00">type="text" 文字输入框</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="text"
            isright 
            label="经 营 门 店"
            v-model.lazy='SNODECODE' 
            :value="SNODECODE"
            placeholder="点击输入" 
            @clearClick="SNODECODE=''"
            >
            </rs-field>
        </rs-list>
        <h5 style="color:#f00">type="text" 文字输入框</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="text"
            isright 
            label="经 营 门 店"
            v-model.lazy='SNODECODE' 
            :value="SNODECODE"
            placeholder="点击输入" 
            @clearClick="SNODECODE=''"
            >
            </rs-field>
        </rs-list>
        <h5 style="color:#f00">type="number" 数字输入框</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="number"
            isright 
            label="数 量"
            v-model.lazy='NUM' 
            :value="NUM"
            placeholder="点击输入" 
            @clearClick="NUM=''"
            >
            </rs-field>
        </rs-list>
        <h5 style="color:#f00">type="password" 数字输入框</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="password"
            isright 
            label="密 码"
            v-model.lazy='password' 
            :value="password"
            placeholder="点击输入" 
            @clearClick="password=''"
            >
            </rs-field>
        </rs-list>
        <h5 style="color:#f00">type="data" 年月日选择</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="date"
            isright 
            label="日 期"
            v-model.lazy='BILLDATE' 
            :text="BILLDATE|getWeek"
            @clearClick="BILLDATE=''"
            >
            </rs-field>
        </rs-list>
        <!-- <rr-list-label type="label" label="店 长" v-model.lazy='MANAGER' :value="MANAGER" isright>
        </rr-list-label>
        <rr-list-label type="data" label="开 始 日 期" v-model.lazy='SDATE' :text="SDATE|getWeek" isright>
        </rr-list-label>
        <rr-list-label type="data" v-model.lazy='SDATE' :text="SDATE|getWeek" isright>
        </rr-list-label>
        <rr-list-label type="data" label="结 束 日 期" v-model.lazy='EDATE' :text="EDATE|getWeek" isright>
        </rr-list-label>
        <rr-list-label type="text" label="结 束 日 期" v-model.lazy='SNODECODE' :value="SNODECODE|getWeek" placeholder="点击输入" @clearClick="SNODECODE=''">
        </rr-list-label>
        <rr-list-label type="text" label="网 点 编 号" noborder v-model.lazy='SNODECODE' :value="SNODECODE" placeholder="点击输入" @clearClick="SNODECODE=''">
            <rs-button class="rs-field-button" slot="button" @click.stop="doQuery">查询</rs-button>
        </rr-list-label> -->
        <h5>
            有无底色： outlined {boolean} [outlined=true] 默认有底色<br/>
            例如：&lt;rs-button type="default" outlined&gt;无底色&lt;/rs-button&gt;
        </h5>
        <rs-button type="default">有底色</rs-button>
        <rs-button type="white" outlined>无底色</rs-button>
        <rs-button type="default" outlined>无底色</rs-button>
        <rs-button type="primary" outlined>无底色</rs-button>
        <h5>
            有无底色： size {string} [size=normal] - 尺寸，接受 normal默认, small, large<br/>
            例如：&lt;rs-button type="primary" size="normal"&gt;默认大小&lt;/rs-button&gt;
            <br/>
        </h5>
        <rs-button size="normal">默认大小</rs-button>
        <rs-button type="white" size="small">小按钮</rs-button>
        <rs-button type="primary" size="small">小按钮</rs-button>
        <div style="margin-left:-10px;width:100%"><rs-button type="primary" size="large">大按钮</rs-button></div>
        <h5>
            有无底色： disabled {boolean} [disabled=false] - 禁用 默认不禁用<br/>
            例如：&lt;rs-button type="primary&gt;不禁用&lt;/rs-button&gt;
            <br/>
        </h5>
        <rs-button type="default" disabled>禁用</rs-button>
        <rs-button type="primary" disabled>禁用</rs-button>
        <rs-button type="primary">不禁用</rs-button>    
        <h5>
            图标： icon {string} [icon] - 图标，例如mui-icon-home或者自定义的图标<br/>
            例如：&lt;rs-button icon="mui-icon mui-icon-home"&gt;图标&lt;/rs-button&gt;
            <br/>
        </h5>
        <rs-button icon="mui-icon mui-icon-home">图标</rs-button>
        <rs-button icon="mui-icon mui-icon-home"></rs-button>
        <h5>
            文字按钮：link {boolean} [link=false] - 是否是文字按钮 默认为无文字按钮<br/>
            例如：&lt;rs-button link"&gt;文字按钮&lt;/rs-button&gt;
            <br/>
        </h5>
    </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'button',
    data (){
      return {
          'SNODEID': '4',
          'SNODEID.SNODECODE': 'T0004',
          'SNODEID.SNODENAME': '测试网点4',
          'NUM': 2,
          'password': '22222278u',
          'BILLDATE': '2018-09-20'
      }
    },
    methods:{
        test(event,next){
            setTimeout(()=>{
                next(1);
            },2000);
        }
    },
    filters: {
        getSNODECODE: function(value){
            return value + "网点！！！";
        },
        getWeek:function(value){
            return value + " 周";
        },
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
input, button, .mui-btn{margin-top: 10px;margin-left: 10px}
</style>
