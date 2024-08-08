//String Manipulation Functions:
function reverse(str) {
    var arr=str.split("")
    return arr.join("")
}

function CountChar(str,c) {
    var count=0
    for (let i = 0; i < str.length; i++) {
        if (str[i]===c) {
            count++ 
        }
        
    }
    return count
}

function CapitalizeWords() {
    var arr= str.split("")
    for (let i = 0; i < arr.length; i++) {
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1)
    }
    return arr.join(" ")
}


//Array Functions:
function max(arr) {
    res=arr[0]
    for (let i = 0; i < array.length; i++) {
        if(res<arr[i])
            res=arr[i]
    }
    return res
}

function min(arr) {
    res=arr[0]
    for (let i = 0; i < array.length; i++) {
        if(res>arr[i])
            res=arr[i]
    }
    return res
}

function sum(arr) {
    var res=0
    for (let i = 0; i < array.length; i++) {
    res+=arr[i]
    }
    return res
}

function filterodd(arr) {
var res=0
for (let i = 0; i < array.length; i++) {
if(arr[i]%2===0){
    res.push(arr[i])
} 
}
return res
}


//Mathematical Functions:
function Factorial(n) {
    var res=1
    var i=1
    while (i<=n) {
        res*=i
        i++
    }
    return res
}

function Prime(n) {
var count=0
var i=2
while (i<=n) {
    if(n%i==0){
        count++
    }
    i++
}
return count<=2
}

function Fibonacci(n) {
    var a=1
    var b=1
    var res=0
    var i=2
    while (i<=n) {
        res=a+b
        a=b
        b=res
        i++
    }
    return res
}