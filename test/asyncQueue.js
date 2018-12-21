const async = require('async')

const q = async.queue(function (obj,cb) {
    setTimeout(function () {
        console.log(obj);
        cb();
    },obj.time)
},2);

for (let i =0;i<100;i++){
    console.log(1);
    q.push({name:i,time:i*1000},function (err) {
        if(err){
            console.log(err)
        }
    })
}

for (let i=0;i<100;i++){
    console.log(2);
    q.push({name:1,time:1000},function (err) {
        console.log(err)
    })
}