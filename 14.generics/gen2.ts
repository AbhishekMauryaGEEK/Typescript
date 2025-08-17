function filterarray<t>(array:t[],condition:(item:t)=>boolean):t[] {
    return array.filter((item)=>condition(item))
}
const numarray=[4,5,6,6,3,2,6,7,2,1,43,54,543,23,65,7632,56,12,4]
const evennum =filterarray<number>(numarray,(num)=>num%2===0)
console.log(evennum)
const strarr=["apple","banana","mango","dates"]
const small=filterarray<string>(strarr,(word)=>word.length<=5)
console.log(small)
interface fruit{
    name:string;
    color:string;
}
const fruitarr:fruit[]=[
    {name:"apple",color:"red"},
    {name:"banana",color:"yellow"},
    {name:"chery",color:"red"}
]
const redfru=filterarray<fruit>(fruitarr,(fruit)=>fruit.color==="red")
console.log(redfru)
function reversepair<a,b>(value1:a,value2:b):[b,a]{
    return [value2,value1];
}
const revered=reversepair("hello",3);
console.log(revered)