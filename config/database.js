if(process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb+srv://sam1234:sam1234@vidcluster-pem0f.mongodb.net/test?retryWrites=true' }
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}