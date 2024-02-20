// 内置promise 泛型
function p(){
  return new Promise<Boolean>((resolve,reject)=>{
    resolve(true)
  })
}