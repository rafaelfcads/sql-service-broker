import { Request } from 'tedious'
import statementComplete from './statement-complete'
import columnMetadata from './column-meta-data'
import row from './row'
import requestDone from './request-done'

export default (sql) => (connection) => {
  console.log('Creating Request ...')
  request = new Request(sql.toString(), statementComplete)
  request.on('columnMetadata', columnMetadata)
  request.on('row', row)
  request.on('done', requestDone)

  console.log('Exec Request ', sql)
  connection.execSql(request)
}
