const fs = require('fs')
console.log('-------------------------------------------------------------')
console.log('Read operation Starting in Asynchronous Way.')
console.log('-------------------------------------------------------------')
let filedata = fs.readFileSync('nodejs_architecture.txt')
console.log(filedata.toString())
console.log('-------------------------------------------------------------')
console.log('Read operation terminated successfully.')
console.log('-------------------------------------------------------------')


fs.appendFile('nodejs_architecture.txt','Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum earum cupiditate maxime! Animi debitis nemo dolorem, dicta fugit fuga magni laborum impedit quas. Iure dolorem, cum enim reiciendis facere inventore quod ratione corrupti cumque repellendus quidem quo culpa possimus est delectus iste architecto laudantium consectetur consequatu-------------------------------------------------------------','utf8',function(err){
    if(err){
        console.log('Error in appending the file:',err)
    }else{
        console.log('File appended Successfully.')
    }
})
filedata2 = fs.readFileSync('nodejs_architecture.txt')
console.log(filedata2.toString())

// Deleting the file 
// fs.unlink('nodejs_architecture.txt',function(err){
//     if(err){
//         console.log('Can not delete the file:',err)
//     }else{
//         console.log('File deleted successfully.')
//     }
// })