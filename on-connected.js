import receive from './receive'

export default (connection) => (err) => {
  if (err) return console.log(err) //send to sentry

  process.stdin.resume()
  process.stdin.on('data', (chunk) => receive(chunk)(connection))
  process.stdin.on('end', () => console.log('connection ended!'))

  console.log('connected')
}
