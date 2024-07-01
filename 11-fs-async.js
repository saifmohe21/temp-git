// const {readFile,writeFile}=require('fs')

// readFile('./content/first.txt','utf8', (err, result)=>{
//      if(err){
//          console.log(err)
//         return
//      }
//      const first=result;

//      readFile('./content/second.txt', 'utf8',(err, result)=>{
//           if(err){
//                console.log(err)
//                return
//           }
         
//           const second=result;
//           writeFile('./content/result-sync.txt', `Here is the text: ${first}, ${second}`,
//                (err, result)=>{
//                     if(err){
//                          console.log(err)
//                          return
//                     }
//                     console.log(result)
//                }
//           )
//      })

// })

const {readFile, writeFile}= require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8',(err, result)=>{
     if(err){
          console.log(err)
          return;
     }
   
     const first=result;
     readFile('./content/second.txt','utf8', (err, result)=>{
          if(err){
               console.log(err)
               return;
          }
          
     })
     const second= result;
     
     writeFile('./content/result2-async.txt',`here is the result of read and write: ${first},${second}`,(err, result)=>{
          if(err){
               console.log(result);
               return;
          }
          console.log('done with this task')
     })
})
console.log('starting next task')