
self.postMessage({msg: 'I am form worker'}) 

self.onmessage = (e) => {
    console.log('=====worker进程关闭======')
    self.close();
}
