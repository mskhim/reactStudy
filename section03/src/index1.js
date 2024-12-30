//외부에 있는 모듈을 가져온다.
// const moduleData = require(`./math`);
import{add,sub} from './math.js';
import  multif  from './math.js';
import randomColor from 'randomcolor';
const color =  randomColor();
const sum= add(10,20);
console.log(sum);
console.log(sub(40,10));
console.log(multif(40,10));
console.log(color);