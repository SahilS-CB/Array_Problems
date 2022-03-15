// 1

const arr = [9]
const inte = String(Number(arr.join("")) + 1).split("");
console.log("1:",inte);

// 2

const arr2 = [4,1,2,1,2].sort();
let singleNum;
for(let i = 0;i < arr2.length-1; i = i+2){
    if(arr2[i] != arr2[i+1])
    {
        singleNum = arr2[i];
        break;
    }
}
if(!singleNum){
    singleNum = arr2[arr2.length-1];
}

console.log("2:",singleNum);

// 3
const arr3 = [9,6,4,2,3,5,7,0,1].sort();

for(let i = 0; i < arr3.length; i++){
    if(arr3[i] != i){
        console.log("3:",i);
        break;
    }
}

// 4
const arr41 = [1,4,2,3];
const arr42 = [-4,-3,6,10,20,30];
const d = 3;
let isValid = true;
let dis = 0;
 for(let i = 0; i < arr41.length;i++){
    
     for(let j = 0; j < arr42.length;j++){
         const absValue = Math.abs(arr41[i]-arr42[j]);
         if(absValue<=d){            
            isValid = false;
         }
     }
     if(!isValid){dis++;isValid = true; }
     
 }
 console.log("4:",(arr41.length - dis));


// 5
const arr5 = [0];
let count = 0;
arr5.forEach((el,i)=>{
    if(el === 0){
        arr5.splice(i,1);
        count++;
    }
})

for(let i = 0; i < count; i++){
    arr5.push(0);
}
console.log("5:",arr5);