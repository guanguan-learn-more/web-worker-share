

self.onmessage = (e) => {
    throw new Error('~~Whoooops,worker进程出错啦~~');
}
self.onerror = (error) => {
    console.log('worker进程监听错误', error)
}

