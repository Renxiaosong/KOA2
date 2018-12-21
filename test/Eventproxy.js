const EventProxy = require('eventproxy');
const http = require('http');

const most = 5;

const urlList = [
    'http://127.0.0.1:20010/events/v2.0/patrols/completion-rate?region_code=350000000000',
    'http://127.0.0.1:20010/events/v2.0/patrols/completion-rate?region_code=350000000000',
    'http://127.0.0.1:20010/events/v2.0/patrols/completion-rate?region_code=350000000000',
    'http://127.0.0.1:20010/events/v2.0/patrols/completion-rate?region_code=350000000000',
    'http://127.0.0.1:20010/events/v2.0/patrols/completion-rate?region_code=350000000000',
];

function foo(start) {
    const ep = new EventProxy();
    ep.after('ok',most,function () {
        foo(start+most)//一个批次任务完成，递归执行下一批
    });

    let q = 0;
    for(let i=start;i<urlList.length;i++){
        if(q>=most){
            break;//最多添加most个任务
        }
        const delay = parseInt((Math.random()*10000000)%2000,10);
        console.log(delay)
        // http.get(urlList[i],function (res) {
        //     console.log(res.statusCode)
        //     res.on('end',function () {
        //         ep.emit('ok');
        //     })
        // });
        q++;
    }
}

foo(0)