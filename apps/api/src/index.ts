import express from 'express'

const app = express()
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', project: 'InView API' })
})

app.listen(3001, () => {
  console.log('InView API running on http://localhost:3001')
})
