<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="按钮button" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
            背景类型：type {string} [type=default]<br/>
            显示类型，接受 default（白色背景，灰色边框，灰色字）, primary, danger,success,white,grey<br/>
            如果无type或者type为空则表现为primary<br/>
            例如：&lt;rs-button type="default"&gt;default按钮&lt;/rs-button&gt;
        </h5>
        <rs-button type="default">default按钮</rs-button>
        <rs-button type="primary">primary按钮</rs-button>
        <rs-button type="danger">danger按钮</rs-button>
        <rs-button type="success">success按钮</rs-button>
        <rs-button type="white">white按钮</rs-button>
        <rs-button type="grey">grey按钮</rs-button>
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
        <rs-button link>文字按钮</rs-button>
    </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'button',
    data (){
      return {}
    },
    methods:{
        test(event,next){
            setTimeout(()=>{
                next(1);
            },2000);
        }
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
input, button, .mui-btn{margin-top: 10px;margin-left: 10px}
</style>
