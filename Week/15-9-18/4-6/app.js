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

console.log(cellPhone)
// console.log(cellPhone.samsung.models.s2.camera)
// console.log(cellPhone.samsung.models.s3.camera)
// console.log(cellPhone.samsung.models.s4.camera)

// for (var i = 0; i < cellPhone.length; i++) {
//     console.log(cellPhone[i])
// }
var userRequire = 'samsung'
for (var key in cellPhone) {
    // console.log(key)
    // console.log(cellPhone[key])
    for (var key2 in cellPhone[key]) {
        if (key === userRequire) {
            // console.log(cellPhone[key][key2])
            for (var key3 in cellPhone[key][key2]) {
                // console.log(key3)
                if (key3 === 's4') {
                    console.log(cellPhone[key][key2][key3].camera)
                }
            }
        }
    }
}
