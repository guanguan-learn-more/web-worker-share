import randomstring from 'randomstring';
 //数据准备
 const ITERATE_COUNT = 100000;
 const STR_LEN = 10;
 function genMultiData(count, length) {
     const data = []
     for (let i = 0; i < count; i++) {
         const item = randomstring.generate(length);
         data.push({ key: `Key - ${i}`, val: item });
     }
     return data;
 }
 const time1 = new Date()
 const rawData = genMultiData(ITERATE_COUNT, STR_LEN);
 function reverseString(str) {
     return str.split("").reverse().join("");
 }



self.postMessage("done");

self.onmessage = () => {
    const time = new Date();
    console.log(666,time)
   
    const target = rawData;
    for (let el of target) {
        const { val } = el;
        reverseString(val);
    }

    self.postMessage({st: time});
    // Close the worker when jobs done
    // self.close();


}