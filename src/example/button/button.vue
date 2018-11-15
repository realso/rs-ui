<template>
    <rs-button @click="test">按钮</rs-button>
</template>
<script>
export default {
    data(){
        return {
        }
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
