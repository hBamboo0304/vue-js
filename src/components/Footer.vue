<template>
  <div id ="commonFooter">
      <p>{{ msg }}</p>
    </div>
</template>

<script>
// export defaultはコンポーネント化したい場合に使う。
// ほかの場所からも呼び出せるようになる。
// new Vueはその時実行したい場合につかう
export default {
  // 共通ヘッダー
  name: 'commonFooter',
  data () {
    return {
      msg: 'Copyright © 2020 XXXXXXXXXX. All Rights Reserved.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h1 {
  font-weight: normal;
}

</style>
