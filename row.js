export default (columns)  => columns.reduce((prev, next) => `${prev}${next}\t`, '')


