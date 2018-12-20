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
            清除按钮是否存在: isclear {Boolean} 默认无清除按钮，加上isclear为有清除按钮<br/>
            清除按钮的事件：clearClick @clearClick="SNODECODE=''"<br/>
            例如：&lt;rs-field type="label" noborder isright label="经 营 门 店" v-model.lazy='SNODEID' :text='this["SNODEID.SNODECODE"]+ " " +this["SNODEID.SNODENAME"]'&gt;&lt;/rs-field&gt;
        </h5>
        <h5 style="color:#f00">type="label" 不能输入，第二个有清除按钮</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="label"
            isright 
            label="经 营 门 店"
            v-model.lazy='SNODEID' 
            :text='this["SNODEID.SNODECODE"]+ " " +this["SNODEID.SNODENAME"]' 
            >
            </rs-field>
            <rs-field
            type="label"
            isright 
            isclear
            @clearClick="clearClick1"
            label="经 营 门 店"
            v-model.lazy='SNODEID' 
            :text='this["SNODEID.SNODECODE"]+ " " +this["SNODEID.SNODENAME"]' 
            >
            </rs-field>
        </rs-list>
        
        <h5 style="color:#f00">type="data" 年月日选择</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="date"
            isright 
            isclear
            label="日 期"
            v-model.lazy='BILLDATE' 
            :text="BILLDATE|getWeek"
            @clearClick="BILLDATE=''"
            >
            </rs-field>
        </rs-list>
        <h5>
            以下只有type为text password有用<br/>
            输入框是否点击：disabled {Boolean} 默认可以点击<br/>
            输入框是否可读：readonly {Boolean} 默认可读<br/>
            例如：&lt;rs-field type="text" label="经 营 门 店" v-model.lazy='SNODECODE' :text="SNODECODE | getSNODECODE" disabled&gt;无底色&lt;/rs-field&gt;
        </h5>
        <h5 style="color:#f00">type="text" 文字输入框，第二个无法点击</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="text"
            label="经 营 门 店"
            v-model.lazy='SNODECODE' 
            :text="SNODECODE | getSNODECODE"
            placeholder="点击输入" 
            isclear
            @clearClick="SNODECODE=''"
            >
            </rs-field>
            <rs-field
            type="text"
            label="经 营 门 店"
            disabled
            v-model.lazy='SNODECODE' 
            :text="SNODECODE | getSNODECODE"
            placeholder="点击输入" 
            >
            </rs-field>
        </rs-list>
        <h5 style="color:#f00">type="number" 数字输入框，第二个可读状态</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="number"
            label="数 量"
            v-model.lazy='NUM'
            placeholder="点击输入" 
            isclear
            @clearClick="NUM=''"
            >
            </rs-field>
            <rs-field
            type="number"
            readonly
            label="数 量"
            v-model.lazy='NUM'
            placeholder="点击输入"
            >
            </rs-field>
        </rs-list>
        <h5 style="color:#f00">type="password" 数字输入框</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="password"
            label="密 码"
            v-model.lazy='password' 
            placeholder="点击输入" 
            isclear
            @clearClick="password=''"
            >
            </rs-field>
        </rs-list>
        <h5>
            右侧按钮<br/>
            例如：&lt;rs-button type="primary" size="normal"&gt;默认大小&lt;/rs-button&gt;
            <br/>
        </h5>
        <rs-list size="15" noborder>
            <rs-field
            type="text"
            label="密 码"
            v-model.lazy='SNODECODE' 
            placeholder="点击输入" 
            isclear
            @clearClick="SNODECODE=''"
            >
              <rs-button slot="button">查询</rs-button>
            </rs-field>
        </rs-list>
        <h5>
            type为textarea<br/>
            行数：row {string} [label="姓 名"]
            例如：&lt;rs-field type="textarea" label="说 明" rows='3' v-model.lazy='DETAIL' placeholder="点击输入"&gt;&lt;/rs-field&gt;
            <br/>
        </h5>
        <rs-list size="15" noborder>
            <rs-field
            type="textarea"
            label="说 明"
            rows='3'
            v-model.lazy='DETAIL' 
            placeholder="点击输入"
            >
            </rs-field>
        </rs-list>
        <h5 style="color:#f00">textarea第一个无法点击disabled，第二个可读状态readonly</h5>
        <rs-list size="15" noborder>
            <rs-field
            type="textarea"
            label="说 明"
            rows='3'
            disabled
            v-model.lazy='DETAIL' 
            placeholder="点击输入"
            >
            </rs-field>
            <rs-field
            type="textarea"
            label="说 明"
            rows='3'
            readonly
            v-model.lazy='DETAIL' 
            placeholder="点击输入"
            >
            </rs-field>
        </rs-list>
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
          'SNODECODE': 'T0004',
          'NUM': '2',
          'password': '22222278u',
          'BILLDATE': '2018-09-20'
      }
    },
    methods:{
        test(event,next){
            setTimeout(()=>{
                next(1);
            },2000);
        },
        clearClick1: function(){
          this["SNODEID.SNODECODE"] = ''
          this["SNODEID.SNODENAME"] = ''
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
</style>
