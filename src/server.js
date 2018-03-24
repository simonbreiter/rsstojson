require('dotenv').config()

import express from 'express'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import App from './components/App'
import bodyParser from 'body-parser'
import html from './util/html'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'

import request from 'request'
import { parseString } from 'xml2js'
import axios from 'axios'
import encoding from 'encoding'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  res.set('Content-Type', 'text/javascript')
  next()
})

app.use(express.static('static'))
app.use(express.static('dist/public'))

const createDocument = req => {
  const context = {}
  const sheet = new ServerStyleSheet()
  const app = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.rss_url} context={context}>
        <App />
      </StaticRouter>
    )
  )
  const css = sheet.getStyleTags()
  return html(css, app)
}

app.get('/v1/api', (req, res) => {
  request(
    {
      uri: req.query.rss_url,
      encoding: null
    },
    function (error, response, body) {
      if (!error) {
        if (response.statusCode === 200) {
          // https://stackoverflow.com/questions/30817050/matching-charset-of-http-header-content-type
          const re = /charset=([^()<>@,;:\"/[\]?.=\s]*)/i
          const contentType = response.headers['content-type']
          const charset = re.test(contentType)
            ? re.exec(contentType)[1]
            : 'utf-8'
          const normalizedBody = encoding.convert(
            body,
            'utf-8',
            charset.toLowerCase()
          )
          parseString(normalizedBody, function (er, result) {
            if (result === undefined) {
              res.json({ error: 'No RSS feed found.' })
            } else {
              res.json(result)
            }
          })
        } else {
          res.json({ error: response.statusCode })
        }
      } else {
        console.log('error: ', error.message)
        res.json({ error: error.message })
      }
    }
  )
})

app.get('*', (req, res) => {
  res.send(createDocument(req))
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
})
