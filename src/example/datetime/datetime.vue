<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="日期选择datetime" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
          DateTime Picker(默认日期选择包括年月日时分)<br />
          v-model="value"选择之后的要显示的值的字段，设定初始值，在data中设置value：'04:32'<br />
          <pre>
data (){
  return {
    value: '04:32'
    }
}
          </pre>
          @confirm="handleChange"选择确定后的事件<br />
          例如：
          <pre>
&lt;rs-datetime&gt;
  ref="picker1"
  v-model="value"
  :closeOnClickModal="false"
  @visible-change="handleVisibleChange"
  @confirm="handleChange"&gt;
&lt;/rs-datetime&gt;
          </pre>
        </h5>
        <rs-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</rs-button>
        <p style="color:red">{{value}}</p>
        <rs-datetime
          ref="picker1"
          v-model="value"
          :closeOnClickModal="false"
          @visible-change="handleVisibleChange"
          @confirm="handleChange">
        </rs-datetime>

        <rs-button @click.native="open('picker5')" size="large">设定初始值</rs-button>
        <p style="color:red">{{value5}}</p>
        <rs-datetime
          ref="picker5"
          type="time"
          v-model="value5"
          @confirm="handleChange">
        </rs-datetime>
         <h5>
          Date Picker(选择包括年月日)<br />
          type="date"类型：data选择包括年月日<br />
          type="time"类型：time选择包括时分<br />
          例如：
          <pre>
&lt;rs-datetime
  ref="picker2"
  type="date"
  v-model="value2"
  @confirm="handleChange"&gt;
&lt;/rs-datetime&gt;
          </pre>
        </h5>
        <rs-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</rs-button>
        <p style="color:red">{{value2}}</p>
        <rs-datetime
          ref="picker2"
          type="date"
          v-model="value2"
          @confirm="handleChange">
        </rs-datetime>
        <rs-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</rs-button>
        <p style="color:red">{{value3}}</p>
        <rs-datetime
          ref="picker3"
          type="time"
          v-model="value3"
          @confirm="handleChange">
        </rs-datetime>
        <h5>
          自定义模板<br />
          year-format="{value} 年":年份设置<br />
          month-format="{value} 月":月份设置<br />
          date-format="{value} 日":日期设置<br />
          例如：
          <pre>
&lt;rs-datetime
  ref="picker2"
  type="date"
  v-model="value2"
  @confirm="handleChange"&gt;
&lt;/rs-datetime&gt;
          </pre>
        </h5>
        <rs-button @click.native="open('picker4')" size="large">自定义模板</rs-button>
        <p style="color:red">{{value4}}</p>
        <rs-datetime
          ref="picker4"
          type="date"
          v-model="value6"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          @confirm="handleChange"
          :startDate="startDate">
        </rs-datetime>   
      </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'tabbar',
    data (){
      return {
        selected: '工作台',
        mlex: 10,
        text: '10.00',
        value: '2018-12-11',
        value2: '2018-12-11',
        value3: '04:32',
        value4: '2018-12-11',
        value6: new Date('2018-12-11'),
        value5: '04:32',
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
      }
    },
    filters: {
      toFixed(value,cm){
        return parseFloat(value).toFixed(cm)
      }
    },
    methods:{
      text1(val) {
        this.text=parseFloat(val).toFixed(2)
      },
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.$toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },
      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
</style>
