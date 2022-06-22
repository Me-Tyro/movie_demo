const express = require('express')
const app = express()

// 轮播图
const caroUsel = require('./datajson/轮播.json')
// 最新
const updateMovie = require('./datajson/最新.json')
// 电影
const movie = require('./datajson/电影.json')
// 电视剧
const tvDrama = require('./datajson/电视剧.json')
// 动漫
const cartoon = require('./datajson/动漫.json')
// 综艺
const varietyShow = require('./datajson/综艺.json')

app.get('/carousel', (req, res) => {
  res.json(caroUsel)
})

app.get('/movie', (req, res) => {
  res.json(movie)
})

app.get('/tvdrama', (req, res) => {
  res.json(tvDrama)
})

app.get('/updatemovie', (req, res) => {
  res.json(updateMovie)
})

app.get('/cartoon', (req, res) => {
  res.json(cartoon)
})

app.get('/varietyshow', (req, res) => {
  res.json(varietyShow)
})

app.listen(520, () => {
  console.log("服务器启动成功：http://127.0.0.1:520")
})
