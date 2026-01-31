function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter);
    }
    let intervalId = setInterval(inner, 1000);   
    return function stopCounter() {
        clearInterval(intervalId);
    };
}

const stop = outer();

// Stop after 5 seconds
setTimeout(() => {
    stop();
    console.log("Interval stopped");
}, 5000);