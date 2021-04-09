var num=123;
var res"";
while(num!=0)
{
    var digit=num%10;
    res=res+digit;
    num=math.floor(num/10);
}
console.log(res);
