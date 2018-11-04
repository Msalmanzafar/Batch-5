
// var userInfo = {
//     name: 'salman',
//     address: 'national',
//     email: 'salman@gmail.com',
//     number: '0132664646'
// }

// console.log(userInfo.name)

var cellPhone = {
    samsung: {
        model: {
            s2: {
                sim: "single",
                display: "4.3 inch",
                ram: "1 gb",
                rom: '8gb',
                cameraF: "2 mp",
                cameraR: '8 mp'
            },
            s3: {
                sim: "single or double",
                display: "4.8 inch",
                ram: "1.5 gb",
                rom: '16gb',
                cameraF: "3 mp",
                cameraR: '12 mp'
            },
            s4: {
                sim: "single",
                display: "5 inch",
                ram: "2 gb",
                rom: '16 , 32 gb',
                cameraF: "5 mp",
                cameraR: '16 mp'
            }
        }
    },
    iphone: {
        model: {
            iphone6: {
                sim: "single",
                display: "4.7 inch",
                ram: "11.0",
                rom: '16 , 32 gb',
                cameraF: "5 mp",
                cameraR: '8 mp'
            },
            iphone6s: {
                sim: "single",
                display: "5 inch",
                ram: "11.5",
                rom: '16 , 32,64 gb',
                cameraF: "5 mp",
                cameraR: '16 mp'
            },

        }
    },
}

// console.log(cellPhone)
// console.log(cellPhone.samsung)
// console.log(cellPhone.samsung.model)
// console.log(cellPhone.samsung.model.s2) 

var customer = "samsung"
var model = 's4'
var flag = false;
for (var key in cellPhone) {
    for (var key2 in cellPhone[key]) {
        if (key === customer) {
            for (var key3 in cellPhone[key][key2]) {
                if (key3 === model) {
                    document.getElementById('list').innerHTML =
                        "<table>" +
                        "<tr>" +
                        "<th>" +
                            "Camer Front"
                        +"</th>"+
                        "<th>" +
                            "Camer Rear"
                        +"</th>"
                        + "</tr>"
                        +"<tr>" + "<td>" +
                            cellPhone[key][key2][key3].cameraF
                        +"</td>"
                        + "<td>" +
                            cellPhone[key][key2][key3].cameraR
                        +"</td>"
                        + "</tr>"
                        + "</table>"
                    flag = true;
                }
            }
        }
    }
}
if (flag === false) {
    console.log("modle not found")
}