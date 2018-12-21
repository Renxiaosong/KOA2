
const EventProxy = require('eventproxy');
const proxy = new EventProxy();
let status = "ready";
const select = function(callback){
    console.log('n')
    proxy.once("selected",function (data) {
        callback(null,data)
    });
    if(status === "ready"){
        status = "pending";
        // db.select("SQL", function(results){
        //     proxy.emit("selected",results);
        //     status = "ready";
        // });
        setTimeout(function () {
            console.log('m')
            proxy.emit('selected',{success:true})
            status = "ready"
        },1)
    }
}


for(let i=0;i<100;i++){
    select(function (err,res) {
        // if(err) console.log(err)
        console.log(res)
    })
}


