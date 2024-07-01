const {readFileSync,writeFileSync}=require('fs')

const first =readFileSync('./content/first.txt','utf8')
const second= readFileSync('./content/second.txt','utf8')
console.log(first , second)

writeFileSync('./content/2-result-sync.txt',`Here is the result:::  ${first} ${second}`)
