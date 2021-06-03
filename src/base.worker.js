
console.log('===== Worker进程 self ======',self)
self.onmessage = (e) => {
    console.log('======== worker进程接受到数据: =======',e)
}
self.postMessage({foo: 'I am form worker'}) 

// Respond to message from parent thread
// self.addEventListener('message', (e) => { 
//     console.log('======== worker进程接受到数据: =======',e)
//  });














