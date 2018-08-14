<template>
  <div>
    {{text}}
  </div>
</template>
<script>
import { query } from '@utils/query'
export default {
  data() {
    return {
        text: ''
    }
  },
  created () {
    const code = query().code
    const openId = query().openId
    this.text = `This is A page!获取参数code=${code}，openId=${openId}`
  }
}
</script>
<style lang="scss">

</style>
