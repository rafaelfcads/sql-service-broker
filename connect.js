import { Connection } from 'tedious'
import onConnected from './on-connected'
import infoError from './info-error'
import end from './end'
import debug from './debug'
import { driverSettings } from './broker-config'

const composeConfig = ({ server, user, password, database, encrypt = false }) => ({ 
  server, 
  userName: user, 
  password, 
  options: { encrypt, database, ...driverSettings } 
})

export default (config) => {
  console.log('Creating connection...')
  const connection = new Connection(composeConfig(config))
  connection.on('connect', onConnected(conection))
  connection.on('infoMessage', infoError)
  connection.on('errorMessage', infoError)
  connection.on('end', end)
  connection.on('debug', debug)

  console.log('Connection created!')
  return connection
}
