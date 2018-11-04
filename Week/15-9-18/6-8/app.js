//objects
// var user={
//     name: "salman",
//     email: 'salman@example.com',
//     address: 'national'
// }

// console.log(user.name)

var cellPhone = {
    samsung: {
        models: {
            s2: {
                color: "blue",
                ram: "1gb",
                storage: '8gb',
                camera: "8m",
                display: '4.3 inch'
            },
            s3: {
                color: "white",
                ram: "1.5gb",
                storage: '8gb',
                camera: "8m",
                display: '4.8 inch'
            },
            s4: {
                color: "gray",
                ram: "2gb",
                storage: '16gb',
                camera: "12m",
                display: '5 inch'
            }
        }
    },
    iphone: {
        models:{
            iph6:{
                color: "blue",
                ram: "11.0",
                storage: '32gb',
                camera: "16m",
                display: '5.1 inch'
            },
            iph6s:{
                color: "sky blue",
                ram: "11.5",
                storage: '64gb',
                camera: "16m",
                display: '5.1 inch',
                fingerSensor: "availble"
            }
        }
    },
    Motorola:{
        
    }
   
}
// console.log(cellPhone)
// console.log(cellPhone.samsung)
// console.log(cellPhone.samsung.models)
// console.log(cellPhone.samsung.models.s4)

// console.log(cellPhone.length)
// for(var i = 0; i <cellPhone.length;i++){
//     console.log(i)
// }

var userRequire = 'iphone'
var model = 's3'
for(var key in cellPhone){
    // console.log(key)
    // console.log(cellPhone[key])
    for(var key2 in cellPhone[key]){
        if(key === userRequire){
            for(var key3 in cellPhone[key][key2]){
                if(key3 === model){
                    console.log(cellPhone[key][key2][key3])
                }
            }
        }
        // console.log(cellPhone[key][key2])
    }
}