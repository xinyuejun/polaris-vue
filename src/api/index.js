'use strict'

import { postService, getService } from './request'

export default {
  addArticle (params) {
    return postService('/article/add', params)
  },
  getArticle () {
    return getService('/article')
  }
}
