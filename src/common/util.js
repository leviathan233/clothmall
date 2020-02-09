//防抖函数
export function debounce(func,delay){
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(function () {
      func.apply(this,args)
    },delay)
  }
}
//时间戳转日期
export function formatTime(timestamp) {
  let date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  let D = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate()+ ' ';
  let h = date.getHours() < 10 ? '0'+date.getHours()+ ':' : date.getHours() + ':';
  let m = date.getMinutes() < 10 ? '0'+date.getMinutes()+ ':' : date.getMinutes() + ':';
  let s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
  // D = date.getDate() + ' ';
  // h = date.getHours() + ':';
  // m = date.getMinutes() + ':';
      // s = date.getSeconds();
  return Y+M+D;
}

