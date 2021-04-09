var arr=[1,2,3,4,5,6,7,8,9,10];
var arrod=[];
var arrev=[];
for(let num of arr)
{
    if(num%2==0)
    {
        arrev.push(num);
    }
    else
    {
        arrod.push(num);
    }
}

console.log(arrod);
console.log(arrev);


