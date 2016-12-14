import numeral from 'numeral';
import './index.css'
const courseValue = numeral(100).format('$0,0.00');

console.log(courseValue);
