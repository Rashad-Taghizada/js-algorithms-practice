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
// //#region task5
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

