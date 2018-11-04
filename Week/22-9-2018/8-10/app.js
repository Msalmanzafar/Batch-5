// var obj = {
//     name:"ghous",
//     age: 19,
//     gender: "male",
//     education: {
//         matric: "city grammer school",
//         per: "70%"
//     }
// }
// for(var key in obj){
//     console.log(key)
// }

var cellPhone = {
    samsung: {
        models: {
            s2: {
                sim: 'single',
                proccesor: 'dual core',
                camera: '8 mgp',
                display: '4.3 inch'
            },
            s3: {
                sim: 'single',
                proccesor: 'dual core',
                camera: '8 mgp',
                display: '4.3 inch'
            },
            s4: {
                sim: 'single',
                proccesor: 'dual core',
                camera: '8 mgp',
                display: '4.8 inch'
            }
        }
    },
    iPhone: {
        models: {
            ip6: {
                sim: 'single',
                proccesor: '11.0',
                camera: '13 mgp',
                display: '4.8 inch'
            }
        }
    }
}

// var a = "name"
// var obj = {
//     name: "ghous"
// }
// console.log(obj[a])



for (var key in cellPhone) {
    // console.log(cellPhone[key])
    for (var key1 in cellPhone[key]) {
        // console.log(cellPhone[key][key1])
        // console.log(key1)
        for (var key2 in cellPhone[key][key1]) {
            // console.log(cellPhone[key][key1][key2].sim)
            document.getElementById('data').innerHTML +=
                "<tr>" + "<td>" + key2 + "</td>" +
                "<td>" + cellPhone[key][key1][key2].sim + "</td>"
                + "<td>" + cellPhone[key][key1][key2].proccesor + "</td>"
                + "<td>" + cellPhone[key][key1][key2].display + "</td>"
                + "</tr>"

        }
    }
}
var flag = false;
function searchData() {
    var data = document.getElementById("search").value;
    if (data !== undefined && data !== "" && data !== " ") {
        for (var key in cellPhone) {
            for (var key1 in cellPhone[key]) {
                for (var key2 in cellPhone[key][key1]) {
                    if (data === key2) {
                        document.getElementById('data').innerHTML = ""
                        document.getElementById('data').innerHTML +=
                            "<tr>" + "<td>" + key2 + "</td>" +
                            "<td>" + cellPhone[key][key1][key2].sim + "</td>"
                            + "<td>" + cellPhone[key][key1][key2].proccesor + "</td>"
                            + "<td>" + cellPhone[key][key1][key2].display + "</td>"
                            + "</tr>"
                        flag = true
                    }
                }
            }
        }
    } else {
        console.log("please enter first")
    }
    if(flag === false){
        console.log("not found")
    }
}