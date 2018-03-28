import mcache from 'memory-cache'

const cache = duration => {
  return (req, res, next) => {
    const key = `__express__${req.originalUrl || req.url}`
    const cachedBody = mcache.get(key)
    if (cachedBody) {
      console.log('Send cached body')
      res.send(cachedBody)
      return
    } else {
      console.log('Send live version and save body in memory')
      res.sendResponse = res.send
      res.send = body => {
        mcache.put(key, body, duration)
        res.sendResponse(body)
      }
    }
    next()
  }
}

export default cache
