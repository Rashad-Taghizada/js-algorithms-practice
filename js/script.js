//#region tasks
// <!-- //Tasks:
//  1) m ededi gelir, m eded 10-30 araligindadirsa hemin ededi 2 defe artirib ekranda yazdir, eks halda     
//   2 defe azaldib ekranda yazdir
//  2) a ve b ededleri gelir, bu ededlerden en azi biri tekdirse hemin ededlerin ceminin kubunu tapin
//  3) m eded gelir, m ededi 10 den kicikdirse hemin ededin kvadratini tap, eks halda kubunu tap
//  4) 1-den m ededine qeder olan ededlerin hasilini tapin
//  5) n ve m ededleri gelir, hemin ededler arsindaki ededlerin cemini tapin
//  6) a ededi gelir, a ededinin faktorialini tapin
//  7) m ve n ededleri arasindaki menfi ededlerin hasilini tapin.
//  8) m ve n ededleri arasindaki tek ededlerin sayini tapin.
//  9) m ve n ededleri arasindaki tek ededlerin cemi ile cut ededlerin ceminin hasilini tapin
// 10) m ededinin sade ve ya murekkeb oldugunu tapin.
// 11) m ve n ededleri arasindaki cut ededlerin hasilini tapin. -->
// 12) Arrayin elementlerinin cemini tapin
// 13) arrayin elementlerinin sayini tapin
// 14) arrayin icindeki tek ededleri tapin
// 15) arrayin icindeki cut ededlerin sayini tapin
// 16) arrayin icindeki tek ededlerin cemini tapin
// 17) arrayin indexlerinin cemini tapin
// 18) arrayin icindeki en boyuk ededi tapin
// 19) arrayin icerisindeki en kicik ededi tapin
// 20) arrayin elementlerinin hasilini tapin
//#endregion
"use strict"
//#region task1
//     let m=10;
//     let result=1;
//     if(m>=10&&m<=30)
//     {
//         result=m*2;
//     }
//     else
//     {
//         result=m/2;
//     }
// console.log("result" + " " +result);
//#endregion
//#region task2
// let a=10;
// let b=3;
// let result=0;
// if(a%2==0 || b%2==0)
// {
//     result=a+b
// }
// console.log(result**3)
//#endregion
//#region task3
// let m=5;
// let result;
// if(m<10)
// {
//     result=m**2;
// }
// else
// {
//     result=m*3;
// }
// console.log(result)
//#endregion
//#region task4
// let m=6;
// let result=1;
// for(let i=1; i<m;i++)
// {
//     result*=i;
// }
// console.log(result)
//#endregion
//#region task5
//  let n=5;
//  let m=8;
//  let sum=0;
//  for (let i=n; i<=m;i++)
// {
//     sum+=i;
// }
// console.log(sum);
// //#endregion
//#region task6
// let a=5;
// let factorial=1;
// for(let i=a; i>=1; i--)
// {
//     factorial*=i;
// }
// console.log(factorial)
//#endregion
//#region task7
// let m=-3;
// let n=2;
// let result=1;
// for(let i=m; i<=n;i++)
// {
//     if(i<0)
//     {
//         result*=i;
//     }
// }
// console.log(result);
//#endregion
//#region task8
// let m=3;
// let n=10;
// let count=0;
// for(let i=m; i<n;i++)
// {
//     if(i%2==0)
//     {
//         count++;
//     }
// }
// console.log(count);
//#endregion
//#region task9
// let n=3;
// let m=10;
// let result=1;
// let sumForOddNums=0;
// let sumForEvenNums=0;
// for(let i=n; i<=m;i++)
// {
//     if(i%2==0)
//     {
//         sumForEvenNums+=i;
//     }
//     else
//     {
//         sumForOddNums+=i;
//     }
    
//     result=sumForEvenNums*sumForOddNums;
// }
// console.log(result);
//#endregion
//#region task10
// let m=10;
// let bolen=0;
// for(let i=1; i<=m;i++)
// {
//     if(m%i==0)
//     {
//         bolen++;
//     }
// }
// if(bolen==1){
//     console.log("bir ne sade ne murekkeb ededdir.")
// }
// else if(bolen>2){
//     console.log("murekkeb ededdir "+bolen);
// }
// else
// {
//     console.log("sade ededir "+bolen);
// }
//#endregion
//#region task11
// let m=4;
// let n=10;
// let result=1;
// for(let i=m; i<=n; i++)
// {
//     if(i%2==0)
//     {
//         result*=i
//     }
// }
// console.log(result);
//#endregion
//#region task12
// let arr=[1,2,3,4];
// let sum=0;
// for (const element of arr) {
//     sum+=element;
// }
// console.log(sum);
//#endregion
//#region task13
// let arr=[1,2,3,4,5]
// let count=0;
// for(let i=0; i<arr.length;i++)
// {
//     count++;
// }
// console.log(count);
//#endregion
//#region task14
// let arr=[1,2,3,4,5];
// let oddNums=[];
// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i]%2==1)
//     {
//             oddNums[oddNums.length]=arr[i];

//     }
// }
// console.log(oddNums);
//#endregion
//#region task15
// let arr=[1,2,3,4,5];
// let countOfEvenNums=0;
// for(let i=0; i<arr.length;i++)
// {
//     if(arr[i]%2==0)
//     {
//         countOfEvenNums++;
//     }
// }
// console.log(countOfEvenNums)
//#endregion
//#region task16
// let arr=[1,2,3,4,5];
// let sumOfOddNums=0;
// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i]%2==1)
//     {
//         sumOfOddNums+=arr[i];
//     }
// }
// console.log(sumOfOddNums);
//#endregion
//#region task17
// let arr=[1,2,3,4,5];
// let sumOfIndex=0;
// for(let i=0; i<arr.length;i++)
//     {
//         sumOfIndex+=i;
//     }
// console.log(sumOfIndex);
//#endregion
//#region task18
// let arr=[1,2,3,4,5];
// let max=arr[0];
// for(let i=0; i<arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         max=arr[i];
//     }
// }
// console.log(max);
//#endregion
//#region task19
// let arr=[11,2,3,4,5];
// let min=arr[0];
// for(let i=0; i<arr.length;i++)
// {
//     if(arr[i]<min)
//     {
//         min=arr[i];
//     }
// }
// console.log(min)
//#endregion
//#region task20
// let arr=[1,2,3,4,5];
// let productOfNums=1;
// for(let i=0; i<arr.length; i++)
// {
//     productOfNums*=arr[i];
// }
// console.log(productOfNums);
//#endregion
//--------------------------------------------------------------------------------------------------
//#region classwork
//  1) m ededi gelir, m eded 10-30 araligindadirsa hemin ededi 2 defe artirib 
// ekranda yazdir, eks halda 2 defe azaldib ekranda yazdir
//  2) a ve b ededleri gelir, bu ededlerden en azi biri tekdirse hemin ededlerin ceminin kubunu tapin
//  3) m eded gelir, m ededi 10 den kicikdirse hemin ededin kvadratini tap, eks halda kubunu tap
//  4) 1-den m ededine qeder olan ededlerin hasilini tapin
//  5) n ve m ededleri gelir, hemin ededler arsindaki ededlerin cemini tapin
//  6) a ededi gelir, a ededinin faktorialini tapin
//  7) m ve n ededleri arasindaki menfi ededlerin hasilini tapin.
//  8) m ve n ededleri arasindaki tek ededlerin sayini tapin.
//  9) m ve n ededleri arasindaki tek ededlerin cemi ile cut ededlerin ceminin hasilini tapin
// 10) m ededinin sade ve ya murekkeb oldugunu tapin.
// 11) m ve n ededleri arasindaki cut ededlerin hasilini tapin.
// 12) Arrayin elementlerinin cemini tapin
// 13) arrayin elementlerinin sayini tapin
// 14) arrayin icindeki tek ededleri tapin
// 15) arrayin icindeki cut ededlerin sayini tapin
// 16) arrayin icindeki tek ededlerin cemini tapin
// 17) arrayin indexlerinin cemini tapin
// 18) arrayin icindeki en boyuk ededi tapin
// 19) arrayin icerisindeki en kicik ededi tapin
// 20) arrayin elementlerinin hasilini tapin
//#endregion
//#region task1
// function showResult(m){
//     if(m>=10&&m<=30)
//     {
//         let res=m*2;
//         console.log(res);
//     }
//     else
//     {
//         let res=m/2;
//         console.log(res);
//     }
// }
// showResult(9);
//--------------------------
// function getResult(m)
// {
//     let res;
//     if(m>=10&&m<=30)
//     {
//         res=m*2;
//     }
//     else
//     {
//         res=m/2;
//     }
//     console.log(res);
//     return res;
// }
// getResult(11);
// const showResult=(m)=>
// {
//     if(m>=10&&m<=30)
//     {
//         let res=m*2;
//         console.log(res);
//     }
//     else
//     {
//         let res=m/2;
//         console.log(res);
//     }
// }
// showResult(12);
// const getResult=(m)=>{
//     let res;
//     if(m>=10&&m<=30)
//     {
//         res=m*2;
//     }
//     else
//     {
//         res=m/2;
//     }
//     console.log(res);
//     return res;
// }
// getResult(13);
//#endregion
//#region task2
// function showResult(a,b){
//     if(a%2==1||b%2==1)
//     {
//         let res= (a+b)**3;
//         console.log(res)
//     }
//     console.log("not found");
// }
// showResult(3,4);
// function getResult(a,b){
//     let res;
//     if(a%2==1||b%2==1)
//     {
//         res= (a+b)**3;
//     }
//     else{
//         console.log("not found");
//     }
//     console.log(res);
//     return res;
// }
// getResult(3,4);
// const showResult=(a,b)=>{
//     if(a%2==1||b%2==1)
//     {
//         let res= (a+b)**3;
//         console.log(res)
//     }
//     else{
//            console.log("not found");
 
//     }
// }
// showResult(3,4)
// const getResult=(a,b)=>{
//     let res;
//     if(a%2==1||b%2==1)
//     {
//         res= (a+b)**3;
//     }
//     else{
//         console.log("not found");
//     }
//     console.log(res);
//     return res;
// }
// getResult(3,4)
//#endregion
//#region task3 
// function showResult(m){
//     let res;
//     if(m<10&&m>=1){
//         res=m**2;
//     }
//     else{
//         res=m**3;
//     }
//     console.log(res);
// }
// getResult(10);
//  function showResult(m){
//     let res;
//     if(m<10&&m>=1){
//         res=m**2;
//     }
//     else{
//         res=m**3;
//     }
//     console.log(res);
//     return res;
// }
// getResult(10);
// const showResult=(m)=>{
//     let res;
//     if(m<10&&m>=1){
//         res=m**2;
//     }
//     else{
//         res=m**3;
//     }
//     console.log(res);
// }
// showResult(2);
// const showResult=(m)=>{
//     let res;
//     if(m<10&&m>=1){
//         res=m**2;
//     }
//     else{
//         res=m**3;
//     }
//     console.log(res);
//     return res;
// }
// showResult(5);
//#endregion
//#region task4
// function showResult(m){
//     let res=1;
//    for( let i=1; i<=m;i++){
//     res*=i;
//    }
//    console.log(res);
// }
// showResult(4);
// function getResult(m){
//     let res=1;
//    for( let i=1; i<=m;i++){
//     res*=i;
//    }
//    console.log(res);
//    return res;
// }
// getResult(4);
// const showResult=(m)=>{
//    let res=1;
//     for( let i=1; i<=m;i++){
//     res*=i;
//    }
//    console.log(res);
// }
// showResult(3);
// const showResult=(m)=>{
//    let res=1;
//     for( let i=1; i<=m;i++){
//     res*=i;
//    }
//    console.log(res);
//    return res;
// }
// showResult(3);
//#endregion
//#region task5
// function showResult(n,m){
//     let res=0;
//     for(let i=n; i<=m; i++){
//         res+=i;
//     }
//     console.log(res);
// }
// showResult(1,4);
// function getResult(n,m){
//     let res=0;
//     for(let i=n; i<=m; i++){
//         res+=i;
//     }
//     console.log(res);
//     return res;
// }
// getResult(1,4);
// const showResult=(n,m)=>{
//     let res=0;
//     for(let i=n; i<=m; i++){
//         res+=i;
//     }
//     console.log(res);
// }
// showResult(1,4);
// const getResult=(n,m)=>{
//     let res=0;
//     for(let i=n; i<=m; i++){
//         res+=i;
//     }
//     console.log(res);
//     return res;
// }
// getResult(1,4);
//#endregion
//#region task6
// function showFactorial(a){
//     let res=1;
//     for(let i=a; i>=1;i--){
//         res*=i;
//     }
//     console.log(res);
// }
// showFactorial(4);
// function getFactorial(a){
//     let res=1;
//     for(let i=a; i>=1;i--){
//         res*=i;
//     }
//     console.log(res);
//     return res;
// }
// getFactorial(4);
// const showFactorial=(a)=>{
//     let res=1;
//     for(let i=a; i>=1;i--){
//         res*=i;
//     }
//     console.log(res);
// }
// showFactorial(4);
// const getFactorial=(a)=>{
//     let res=1;
//     for(let i=a; i>=1;i--){
//         res*=i;
//     }
//     console.log(res);
//     return res;
// }
// getFactorial(4);
//#endregion
//#region task7
// function showResult(m,n){
//     let res=1;
//     for(let i=m; i<=n;i++){
//         if(i<0)
//         {
//             res*=i;
//         }
//     }
//     console.log(res)
// }
// showResult(-3,2)
// function getResult(m,n)
// {
//     let res=1;
//     for(let i=m; i<=n;i++)
//     {
//       if(i<0)
//         {
//             res*=i;
//         }  
//     }
//     console.log(res);
//   return res;
// }
// getResult(-3,2);
// const showResult=(m,n)=>
// {
//     let res=1;
//     for(let i=m; i<=n;i++)
//     {
//       if(i<0)
//         {
//             res*=i;
//         }  
//     }
//     console.log(res);
// }
// showResult(-3,2);
// const getResult=(m,n)=>
// {
//     let res=1;
//     for(let i=m; i<=n;i++)
//     {
//       if(i<0)
//         {
//             res*=i;
//         }  
//     }
//     console.log(res);
//     return res;
// }
// getResult(-3,2);
//#endregion
//#region task8
//  8) m ve n ededleri arasindaki tek ededlerin sayini tapin.
// function showCount(m,n)
// {
//     let count=0;
//     for(let i=m; i<=n;i++)
//     {
//         if(i%2==1)
//         {
//             count++;
//         }
//     }
//     console.log(`tek ededlerin sayi: ` + count);
// }
// showCount(1,5);
// function getCount(m,n)
// {
//     let count=0;
//     for(let i=m; i<=n;i++)
//     {
//         if(i%2==1)
//         {
//             count++;
//         }
//     }
//     return  console.log(`tek ededlerin sayi: ` + count);
    
// }
// getCount(1,5);
// const showCount=(m,n)=>
// {
//     let count=0;
//     for(let i=m; i<=n;i++)
//     {
//         if(i%2==1)
//         {
//             count++;
//         }
//     }
//     console.log(`tek ededlerin sayi: ` + count);
    
// }
// showCount(1,5);
// const getCount=(m,n)=>
// {
//     let count=0;
//     for(let i=m; i<=n;i++)
//     {
//         if(i%2==1)
//         {
//             count++;
//         }
//     }
//     return console.log(`tek ededlerin sayi: ` + count);
    
// }
// getCount(1,5);
//#endregion
//#region task9
//  9) m ve n ededleri arasindaki tek ededlerin cemi ile cut ededlerin ceminin hasilini tapin
// function showProuct(m,n)
// {
//     let product=1;
//     let odd=0;
//     let even=0;
//     for(let i=m; i<=n;i++)
//     {
//         if(i%2!==0)
//         {
//             odd+=i;
//         }
//         else
//         {
//             even+=i;
//         }
//     }
//     product=odd*even;
//     console.log(product);
// }
// showProuct(1,5);
//#endregion
//#region task10
// 10) m ededinin sade ve ya murekkeb oldugunu tapin.
// function showResult(m)
// {
//     if(m<2)
//     {
//         console.log(`${m} ne sade, ne murekkeb ededdir. `);
//         return;
//     }
//     let count=0;
//     for(let i=1; i<=m;i++)
//     {
//         if(m%i===0)
//         {
//             count++;
//         }
//     }
//     if(count>2)
//     {
//         console.log(`${m} ededi murekkeb ededdir. Bolen sayi: ${count}`);
//     }
//     else
//     {
//        console.log(`${m} ededi sade ededdir. Bolen sayi: ${count}`); 
//     }
// }
// showResult(4);
// showResult(1);
//#endregion
//#region task11
// 11) m ve n ededleri arasindaki cut ededlerin hasilini tapin.
// const showProduct=(m,n)=>
// {
//     let even=1;
//     for(let i=m; i<=n;i++)
//     {
//         if(i%2===0)
//         {
//             even*=i;
//         }
//     }
//     console.log(even);
// }
// showProduct(1,5)
//#endregion
//#region task12
// 12) Arrayin elementlerinin cemini tapin
// function showResult(arr)
// {
//     let sum=0;
//     for(let i=0; i<arr.length; i++)
//     {
//         sum+=arr[i];
//     }
//     console.log(sum);
// }
// showResult([1,2,3,4]);
//#endregion
//#region task13
// 13) arrayin elementlerinin sayini tapin
// const showResult=(arr)=>
// {
//     let count=0;
//     for(let i=0; i<arr.length;i++)
//     {
//         count++;
//     }
//     console.log(`Arraydeki elementlerin sayi ${count} ededdir. `);
// }
// showResult([1,2,3,4]);
//#endregion
//#region task14
// 14) arrayin icindeki tek ededleri tapin
// function showResult(arr)
// {
//     let odds=[];
//     for(let i=0; i<arr.length;i++)
//     {
//         if(arr[i]%2!==0)
//         {
//             odds[odds.length]=arr[i];
//         }
//     }
//     console.log(odds);
// }
// showResult([1,2,3,4])
//#endregion
//#region task15
// 15) arrayin icindeki cut ededlerin sayini tapin
// function showEvens(arr)
// {
//     let count=0;
//     for(let i=0; i<arr.length; i++)
//     {
//         if(arr[i]%2==0)
//         {
//             count++;
//         }
//     }
//     console.log(`Cut ededlerin sayi : ${count}`);
// }
// showEvens([1,2,3,4,5])
//#endregion
//#region task16
// 16) arrayin icindeki tek ededlerin cemini tapin
// const showSumOfOdds=(arr)=>
// {
//     let count=0;
//     for(let i=0; i<arr.length;i++)
//     {
//         if(arr[i]%2!==0)
//         {
//             count+=arr[i];
//         }
//     }
//     console.log(`Arraydeki tek ededlerin cemi: ${count}`);
// }
// showSumOfOdds([1,2,3,4,5]);
//#endregion
//#region task17
// 17) arrayin indexlerinin cemini tapin
// function showSumOfIndex(arr)
// {
//     let sumOfIndex=0;
//     for(let i=0; i<arr.length;i++)
//     {
//         sumOfIndex+=i;
//     }
//     console.log(`Arrayin indexlerinin cemi: ${sumOfIndex}`);
// }
// showSumOfIndex([1,2,3,4,5]);
//#endregion
//#region task18
// function findMaxElement(arr)
// {
//     let max=arr[0];
//     for(let i=0; i<arr.length;i++)
//     {
//         if(arr[i]>max)
//         {
//             max=arr[i];
//         }
//     }
//     console.log(`Arraydeki en boyuk eded: ${max}`)
// }
// findMaxElement([1,21,3,4,5]);
//#endregion
//#region task19
// function findMinElement(arr)
// {
//     let min=arr[0];
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]<min)
//         {
//             min=arr[i];
//         }
//     }
//     console.log(`Arraydeki en kicin eded: ${min}`);
// }
// findMinElement([10,2,3,4,5]);
//#endregion
//#region task20
// function productOfElements(arr)
// {
//     let product=1;
//     for(let i=0;i<arr.length; i++)
//     {
//         product*=arr[i];
//     }
//     console.log(product);
// }
// productOfElements([1,2,3,]);
//#endregion

