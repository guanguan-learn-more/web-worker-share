
import React from 'react';
import ReactDOM from 'react-dom';
// import Worker from 'worker-loader!./base.worker.js';
// import Worker from 'worker-loader!./worker1.js';




// ************* DEMO1:基本使用 ***********************
// import Worker from './base.worker';
// const worker = new Worker();
// worker.postMessage({ msg: 'I am from main thread' });
// worker.onmessage = (e) => {
//   console.log('******** 主进程接收worker进程数据:*********', e)
// }



// ************* DEMO2:错误处理 ***********************
// import Worker from './error.worker.js';
// const worker = new Worker();
// worker.postMessage({ msg: 'I am from main thread' });

// worker.onerror = (error) => {

//   console.log('error对象',error)

//   console.log('主进程监听错误',[
//     'ERROR: Line ', error.lineno, ' in ', error.filename, ': ', error.message,  error.filename,
//   ].join(''));

// }



// ************* DEMO3:进程关闭 ***********************
// import Worker from './close.worker.js';
// const worker = new Worker();
// worker.postMessage({ msg: 'I am from main thread' });
// worker.onmessage = (e) => {
//   console.log('******** 主进程终止worker进程*********', );
//   // worker.terminate();
// }



//************* DEMO4:Worker进程中引入脚本 ***********************
// import Worker from './script.worker.js';
// const worker = new Worker();
// worker.postMessage({ msg: 'I am from main thread' });
// worker.onmessage = (e) => {
//   console.log('******** 主进程接收worker进程数据:*********', e.data)
// }




// ************* DEMO4:Inline-Worker内联worker ***********************

// const workercode = () => {
//   self.onmessage = function (e) {
//       self.postMessage({msg:'内联worker111'})
//       console.log('=====worker进程接收数据 ====',e.data)
//   }
// };

//  let code = workercode.toString();
//  //"() => {\n  self.onmessage = function (e) {\n     console.log('Message received from main script');\n    var workerResult = 'Received from main: ' + e.data;\n    console.log('Posting message back to main script');\n    self.postMessage(workerResult);\n  };\n}"
//  code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
//  // "\n  self.onmessage = function (e) {\n      console.log('Message received from main script');\n    var workerResult = 'Received from main: ' + e.data;\n    console.log('Posting message back to main script');\n    self.postMessage(workerResult);\n  };\n"

// //Blob URL
// // const blob = new Blob([code], { type: "application/javascript" });
// // const url = URL.createObjectURL(blob);


// //Data URL
// const url = `data:application/javascript,${code}`;


// const worker = new Worker(url, { name: 'GQC_WEB_WORKER' });
// worker.postMessage({ msg: 'I am from main thread' });
// worker.onmessage = (e) => {
//   console.log('******** 主进程接收worker进程数据:*********', e.data)
// }





// ************* DEMO5:性能试验***********************
import randomstring from 'randomstring';
//数据准备
// const ITERATE_COUNT = 100000;
// const STR_LEN = 10;
// function genMultiData(count, length) {
//   const data = []
//   for (let i = 0; i < count; i++) {
//     const item = randomstring.generate(length);
//     data.push({ key: `Key - ${i}`, val: item });
//   }
//   return data;
// }
// const rawData = genMultiData(ITERATE_COUNT, STR_LEN);
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// //运行在main thread
// function execTaskSync() {
//   console.time("sync task in main thread");
//   const target = rawData;
//   for (let el of target) {
//     const { val } = el;
//     reverseString(val);
//   }
//   console.timeEnd("sync task in main thread");
// }


// for(let time = 0; time<10;time++){
//   execTaskSync()
// }


//运行在 worker thread
// import Worker from './compute.worker';
// const worker = new Worker();
// worker.postMessage({ msg: 'I am from main thread' });
// worker.onmessage=(e)=>{
//   console.log(new Date() - e.data.st)
// }


// ************* DEMO6:提高canvas性能试验***********************



// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// // 创建多边形的顶点
// // 根据顶点绘制图形
// // 生成随机多边形
// // 执行绘制

// const COUNT = 1000;

// //创建正多边形，返回顶点
// function regularShape(x, y, r, edges = 3) {
//   const points = [];
//   const delta = 2 * Math.PI / edges;
//   for(let i = 0; i < edges; i++) {
//     const theta = i * delta;
//     points.push([x + r * Math.sin(theta), y + r * Math.cos(theta)]);
//   }
//   return points;
// }

// function drawShape(context, points) {
//   context.lineWidth = 2;
//   context.beginPath();
//   context.moveTo(...points[0]);
//   for(let i = 1; i < points.length; i++) {
//     context.lineTo(...points[i]);
//   }
//   context.closePath();
//   context.stroke();
//   context.fill();
// }

// // 多边形类型，包括正三角形、正四边形、正五边形、正六边形和正100边形
// const shapeTypes = [3, 4, 5, 6, -1];
// const TAU = Math.PI * 2;

// function createCache() {
//   const ret = [];
//   for(let i = 0; i < shapeTypes.length; i++) {
//     const cacheCanvas = new OffscreenCanvas(20, 20);
//     const type = shapeTypes[i];
//     const context = cacheCanvas.getContext('2d');
//     context.fillStyle = 'red';
//     context.strokeStyle = 'black';
//     if(type > 0) {
//       const points = regularShape(10, 10, 10, type);
//       drawShape(context, points);
//     } else {
//       context.beginPath();
//       context.arc(10, 10, 10, 0, TAU);
//       context.stroke();
//       context.fill();
//     }
//     ret.push(cacheCanvas);
//   }
//   return ret;
// }

// // 执行绘制
// function draw(ctx, shapes) {
//   const canvas = ctx.canvas;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for(let i = 0; i < COUNT; i++) {
//     const shape = shapes[Math.floor(Math.random() * shapeTypes.length)];
//     const x = Math.random() * canvas.width;
//     const y = Math.random() * canvas.height;
//     ctx.drawImage(shape, x, y);
//   }
//   requestAnimationFrame(draw.bind(null, ctx, shapes));
// }
// const shapes = createCache();
// draw(ctx, shapes);





import Worker from './canvas.worker';
const worker = new Worker();

const canvas = document.querySelector('canvas');
const offscreenCanvas = canvas.transferControlToOffscreen();

worker.postMessage({canvas: offscreenCanvas}, [offscreenCanvas])








function component() {
  const element = document.createElement('h2');
  element.innerHTML = 'Hello Web Worker';
  return element;
}

document.body.appendChild(component());