const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async is started");
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log(console.log("Async resolved"));
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise started");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise resolved");
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'kunalaryan01', url:'https:github.com/kunalaryan08'});
    },1000);
});

promiseThree.then(function(user){
    console.log(user);
})

new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:'kunalaryan01', url:'https:github.com/kunalaryan08'});
        } else{
            reject('Error : Something went wrong. Exit(1)');
        }
    }, 1000);
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((x)=>{
    console.log(x);
}).catch((e)=>{
    console.log(e);
}).finally(()=>{
    console.log("THe Error might have been resolved!!! Hence NO error");
})

const p5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:'kunalaryan01', url:'https:github.com/kunalaryan08'});
        } else{
            reject('Error : Something went wrong. Exit(1)');
        }
    }, 1000);
});

async function five(){
    try {
        const data = await p5;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

five();

async function getAllUsers(){
    try {
        const api = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await api.json();
        console.log(data); 
    } catch (error) {
        console.log(error);
    }
}

getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    const data = response.json();
    return data;
}).then((api)=>{
    console.log(api);
}).catch((e)=>{
    console.log(e);
})