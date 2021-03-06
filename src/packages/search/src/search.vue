<template>
  <div class="rs-search">
    <div class="rs-searchbar">
      <div class="mui-input-row mui-search">
        <input
        ref="input"
        type="search"
        v-model="currentValue"
        :placeholder="placeholder"
        class="mui-input-clear">
      </div>
      <a
        class="rs-searchbar-cancel"
        @click="Click"
        v-text="cancelText">
      </a>
    </div>
    <div class="rs-search-list" v-show="show || currentValue">
      <div class="rs-search-list-warp">
        <slot>
          <ul class="mui-table-view"><li class="mui-table-view-divider mui-indexed-list-group" v-for="(item, index) in result" :title="item" :key="index">{{item}}</li></ul>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * rs-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=查询] - 查询按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动 focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 *
 * @example
 * <rs-search :value.sync="value" :result.sync="result"></rs-search>
 * <rs-search :value.sync="value">
 *   <rs-list size="12">
 *     <rs-list-item v-for="(item,index) in filterResult" isright=true :key="index" @click.native="searchItem(index)">
 *       {{item}}
 *     </rs-list-item>
 *   </rs-list>
 * </rs-search>
 */
export default {
  name: 'rs-search',
  data () {
    return {
      visible: false,
      currentValue: this.value
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    Click (evt) {
      this.show = true
      this.$emit('click', evt)
    }
  },
  props: {
    value: String,
    show: Boolean,
    cancelText: {
      default: '查询'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array
  },
  mounted () {
    this.autofocus && this.$refs.input.focus()
  }
}
</script>

<style lang="postcss">
  @component-namespace rs {
    @component search {
      height: 100%;
      height: 100vh;
      overflow: hidden;
    }
    @component searchbar {
      position: relative;
      align-items: center;
      background-color: #f2f2f2;
      box-sizing: border-box;
      display: flex;
      padding: 5px 10px;
      z-index: 1;
     .mui-search {
        color: #d9d9d9;
        display: flex;
        flex: 1;
        height: 28px;
        border-radius: 2px;
        align-items: center;
      }
      .mui-input-clear {
        font-size: 12px;
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        outline: 0;
        color: #333;
        margin-bottom: 0;
      }
      @descendent cancel {
        color: #26a2ff;
        margin-left: 10px;
        text-decoration: none;
        font-size: 12px
      }
    }
    @component search-list {
      overflow: auto;
      padding-top: 82px;
      position: absolute 0 0 0 0;
    }
  }
</style>
