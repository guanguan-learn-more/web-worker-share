
// import SparkMD5 from "spark-md5"; //worker-loader支持

import * as UTILS from './utils'; ////worker-loader支持
// import randomstring from 'randomstring';

self.onmessage = (e) => {
    /*************引入一个脚本 */
    // importScripts("https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.15/lodash.min.js");
    // const msg = _.join(['a', 'b', 'c'], '%');
    // self.postMessage(msg) 

    /*************引入多个脚本 */
    // importScripts("https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.15/lodash.min.js",'https://cdnjs.cloudflare.com/ajax/libs/spark-md5/3.0.0/spark-md5.min.js');

    // const spark = new SparkMD5();
    // spark.append('Hi');
    // spark.append(' there');
    // const hash = spark.end();  

    // const msg = _.join(['a', 'b', 'c'], '%');

    // self.postMessage({msg,hash})

    /************* 项目中脚本 ***/
    importScripts('./utils.js')
    console.log(UTILS.NAME)
    self.postMessage(UTILS.NAME)
}
