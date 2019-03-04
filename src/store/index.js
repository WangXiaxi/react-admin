const files = require.context('./modules', true, /index.js$/)
const store = {}

files.keys().forEach(key => {
  store[key.replace(/(\.\/|\/index.js)/g, '')] = files(key).default
})
console.log(store)
export default store