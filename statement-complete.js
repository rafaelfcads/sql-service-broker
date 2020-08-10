export default (err, rowCount) => {
  if (err) return  console.log('Statement failed: ' + err)
  console.log(rowCount + ' rows')
}
