function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = Math.random();
            if(data >= 0.5)
            {
                resolve(data);
            }
            else {
                reject("Data less than 0.5");
            }
        }, 1000)
    })
}

function processData () {
    fetchData().then((result) => {
        console.log("Data recieed:", result);
        return result * 10;
    }).then((processedData) => {
        console.log("processed data:", processData);
    }).catch((error) => {
        console.error("Error:", error)
    })
}

processData();