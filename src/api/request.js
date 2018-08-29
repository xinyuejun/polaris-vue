'use strict'

import axios from 'axios'
import { API_HOST } from '../utils/api'

export const getService = (url) => {
  return new Promise((resolve, reject) => {
    console.log(`${API_HOST}${url}`)
    axios.get(`${API_HOST}${url}`)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const postService = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_HOST}${url}`, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
