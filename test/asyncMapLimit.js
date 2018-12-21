const async = require('async');

const urlList = [
    'http://127.0.0.1:20010/events/v2.0/patrols/completion-rate?region_code=350000000000',
    'http://127.0.0.1:20010/events/v2.0/patrols/completion-rate?region_code=350000000000',
    'http://127.0.0.1:20010/events/v2.0/patrols/completion-rate?region_code=350000000000',
    'http://127.0.0.1:20010/events/v2.0/patrols/completion-rate?region_code=350000000000',
    'http://127.0.0.1:20010/events/v2.0/patrols/completion-rate?region_code=350000000000',
];

let concurrencyCount = 0;

const fetchUrl = (url,callback)=> {
    //delay的值在2000以内，是个随机的数
    const delay = parseInt((Math.random()*10000000)%2000,10);
    concurrencyCount++;
    console.log('现在的并发数是',concurrencyCount,'，正在抓取的是'+ url, '，耗时' + delay + '毫秒')
    setTimeout(function () {
        concurrencyCount--;
        //抓取成功，调用回调函数
        callback(null,url+' html content');
    },delay)
}

async.mapLimit(urlList,5,(url,callback)=> {
    fetchUrl(url,callback)
},function (err,result) {
    if(err){
        console.log(err)
    }else{
        //所有连接抓取成功，返回会掉结果列表
        console.log('final：',result)
    }
})