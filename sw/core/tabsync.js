var timerID;
//no support for IE11
if ('serviceWorker' in navigator) {
    //tabSyncReady = new Promise(); 
    navigator.serviceWorker.register('service-worker.js', )
        .then(function(reg) {
            return navigator.serviceWorker.ready;
        })
        .then(function(reg) {
            console.log('Service Worker is ready', reg);
            navigator.serviceWorker.addEventListener('message', function(event){
                if (event.data) {
                    /**@type MessageAction*/
                    var data = event.data;
                    switch(data.type) {
                        case 'notify':{
                            if (data.id === "counter" && data.data !== undefined) {
                                setCounter(data.data, true);
                            }
                        break;}
                    }
                }
            });
            timerID = setInterval(timerHandler, 5000);
        }).catch(function(error) {
            console.log('Error : ', error);
        });
}



function timerHandler(){
    setCounter(Date.now(), false)
}

function setCounter(count, fromOtherTab) {
    document.getElementById("counter").innerHTML = parseInt(count);
    if (fromOtherTab) {
        clearInterval(timerID);
    }else{
        stateToServiceWorker({type:'notify', id:'counter', data: count});
    }
}

function stateToServiceWorker(data){
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage(data);
    }
}

function initCounter() {
    setCounter(0, false);
}
initCounter();
