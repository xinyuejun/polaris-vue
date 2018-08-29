<template>
  <div class="write">
    <el-form label-width="100px">
      <el-form-item label="title">
        <el-input v-model="addArticleParams.title"></el-input>
      </el-form-item>
      <el-form-item label="description">
        <el-input v-model="addArticleParams.description"></el-input>
      </el-form-item>
      <el-form-item>
        <mavon-editor v-model="addArticleParams.content"></mavon-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addArticleMethod">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '../api'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'write',
  components: {
    mavonEditor
  },
  data () {
    return {
      addArticleParams: {
        nickname: 'polaris',
        title: '',
        description: '',
        content: '',
        skim: 0,
        isAdmin: true,
        status: true
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      if (this.$route.params.id && this.$route.params.id !== 'new') this.getArticleMethod()
    },
    addArticleMethod () {
      api.addArticle(this.addArticleParams)
        .then(res => {
          if (res.resultCode === 200) {
            console.log(res)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getArticleMethod () {
      api.getArticle()
        .then(res => {
          this.addArticleParams.title = res.data[0].title
          this.addArticleParams.description = res.data[0].description
          this.addArticleParams.content = res.data[0].content
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
