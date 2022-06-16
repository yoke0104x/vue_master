<template>
    <div class="rollWrapper">
      <div class="textItem">
        <span class="textContent" ref="node">{{text}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'roll',
  props: ['text'],
  data() {
    return {
      stringLength:"",
    }
  },
  methods: {
    addKeyframesRule() {
      let ss = document.styleSheets,
          rule, i, x;
      for (i = ss.length-1; i >= 0; --i) {
        if (ss[i].cssRules) {
          for (x = ss[i].cssRules.length - 1; x >= 0; x--) {
            rule = ss[i].cssRules[x];
            if(rule.name && rule.name.includes('textScroll') && rule.type === 7){
              rule.appendRule('to {transform: translateX(-' + this.stringLength + 'px);}');
              return rule;
            }
          }
        }
      }
      return null
    },
  },
  mounted() {
    this.stringLength = String(this.$refs.node.getBoundingClientRect().width)
    this.addKeyframesRule()
  }
}
</script>

<style scoped lang="less">
.rollWrapper{
  overflow: hidden;
  width: 100%;
}
.textContent{
  /* 此处的padding是为了达到无缝切换的效果，不加导致的问题我说不太清，大伙可以试试 */
  padding-right: 320px;
}
.textItem {
  animation: textScroll linear 15s infinite;
}
@keyframes textScroll {
  from {
    transform: translateX(0)
  }
  /*to的内容由方法赋予*/
}

</style>

