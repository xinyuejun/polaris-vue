<template>
  <div class="home">
    <div class="content" v-for="article in articleList" :key="article._id">
      <h3 class="title" @click="goWritePage(article._id)">{{ article.title }}</h3>
      <h5 class="description">{{ article.description }}</h5>
      <p>{{ article.content }}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
import api from '../api'
export default {
  data () {
    return {
      articleList: []
    }
  },
  created () {
    this.getArticleService()
  },
  methods: {
    getArticleService () {
      api.getArticle()
        .then(res => {
          this.articleList = res.data
        })
    },
    goWritePage (id) {
      this.$router.push({
        name: 'article',
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
