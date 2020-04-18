<template>
  <div id="" class="tileContents">
      <h2>アニメのタイトル一覧</h2>
      <!-- アニメのタイル一覧 -->
      <ul>
          <!--詳細画面遷移リンク-->
          <li v-for="(item, index) in items" :key=index>
              <!--  公式サイトリンク -->
              <a href="https://vuejs.org" target="_blank">
                {{ msg }}
                <div class="tileImg">
                  <img :src="image_src">
                </div>
                <router-link :to=item.path>
                    {{ item.title }}
                </router-link>
              </a>
          </li>
      </ul>
      <div class="tileFrexBox">
        <div class="tileItem">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
        </div>
      </div>
    </div>
</template>

<script>
// export defaultはコンポーネント化したい場合に使う。
// ほかの場所からも呼び出せるようになる。
// new Vueはその時実行したい場合につかう
export default {
  // 共通ヘッダー
  name: 'tileContents',
  data () {
    return {
      msg: 'アニメタイトル by Json',
      image_src: 'https://eiga.k-img.com/images/anime/program/108428/photo/565c5494f76ebb59/320.jpg?1579510974',
      items: [
        {
          // アニメのタイル
          // title: 'json_アニメタイトル（画面遷移機能）',
          path: '/detail/[json_アニメタイトル]'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h1 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  margin-left: auto;
  width: auto;
  display:flex;
  justify-content: center;
  padding: 0;
  display:grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}
li {
  width: 400px;
  height: 400px;
  margin:10px;
  font-size: 24px;
  background-color: skyblue;
  border-radius: 8px;
  position: relative;
    }

.tileImg {
  position: relative;
  width: 400px;
  height: 300px;
  overflow: hidden;
}
.tileImg img {
  position:absolute; /**絶対配置 */
  left: 50%;
  top: 50%;
  width: auto;
  height: auto;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.tileFrexBox {
  display: flex;
  justify-content: flex-start;
}

.tileItem {
  background-color: cadetblue;
  max-width: 960px;
  height: 100%;
  text-align: left;
}

</style>
