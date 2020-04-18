<template>
  <div id="app">
    <div id ="common-header">
      <title>あとできめる</title>
      <img :src="image_src"><!-- takeuchi:あとでロゴ作成するかも -->
        <h1>{{ msg1 }}</h1>
        <input type="text" placeholder="これでアニメを検索予定">
    </div>
    <router-view/>
  </div>
</template>

<script>
//  export defaultはコンポーネント化したい場合に使う。
//  ほかの場所からも呼び出せるようになる。
// new Vueはその時実行したい場合につかう
export default {
  // 共通ヘッダー
  name: 'commonHeader',
  data () {
    return {
      // アニメ画像仮
      image_src: require('./assets/logo.png'),
      // TOPタイトル
      msg1: 'アニメ情報　仮',
      // アニメサイトLink
      msg: '公式サイトリンク',
      items: [
        //  アニメの詳細画面遷移リンク
        {
          title: 'json_アニメタイトル（画面遷移機能）',
          path: '/detail/[json_アニメタイトル]'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'メイリオ','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /** text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
#appHeader {
    display: block;
    width:60%;
    margin-left: 20%;
    overflow: hidden;
}

/**
ol {
  margin-left: auto;
  width: 480px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 500px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: skyblue;
  border-radius: 8px;
  position: relative;
}
 */

li:hover {
  opacity: 0.4;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

</style>
