let fn = document.querySelector("#fn");
let sn = document.querySelector("#sn");
let fan = document.querySelector("#fan");
let btn = document.querySelector("#btn");
let p = document.querySelector("p");
let password_array
btn.onclick = function () {
    if (fn.value !== "" && sn.value !== "" && fan.value !== "") {
        fn = fn.value;
        fan = fan.value;
        sn = sn.value;
        password_array =
        [
            `${fn}@${sn}`,
            `${sn}@${fn}`,
            `${fn}@${fan}`,
            `${sn}@${fan}`,
            `${fan}@${fn}`,
            `${fan}@${sn}`,
            `${fn.toUpperCase()}@${sn.toUpperCase()}`,
            `${sn.toUpperCase()}@${fn.toUpperCase()}`,
            `${fn.toUpperCase()}@${fan}`,
            `${sn.toUpperCase()}@${fan}`,
            `${fan}@${fn.toUpperCase()}`,
            `${fan}@${sn.toUpperCase()}`,
            `${fn.toLowerCase()}@${sn.toLowerCase()}`,
            `${sn.toLowerCase()}@${fn.toLowerCase()}`,
            `${fn.toLowerCase()}@${fan}`,
            `${sn.toLowerCase()}@${fan}`,
            `${fan}@${fn.toLowerCase()}`,
            `${fan}@${sn.toLowerCase()}`,
            `${fn}#${sn}`,
            `${sn}#${fn}`,
            `${fn}#${fan}`,
            `${sn}#${fan}`,
            `${fan}#${fn}`,
            `${fan}#${sn}`,
            `${fn.toUpperCase()}#${sn.toUpperCase()}`,
            `${sn.toUpperCase()}#${fn.toUpperCase()}`,
            `${fn.toUpperCase()}#${fan}`,
            `${sn.toUpperCase()}#${fan}`,
            `${fan}#${fn.toUpperCase()}`,
            `${fan}#${sn.toUpperCase()}`,
            `${fn.toLowerCase()}#${sn.toLowerCase()}`,
            `${sn.toLowerCase()}#${fn.toLowerCase()}`,
            `${fn.toLowerCase()}#${fan}`,
            `${sn.toLowerCase()}#${fan}`,
            `${fan}#${fn.toLowerCase()}`,
            `${fan}#${sn.toLowerCase()}`,
            `${fn}#${sn}`,
            `${sn}#${fn}`,
            `${fn}#${fan}`,
            `${sn}#${fan}`,
            `${fan}#${fn}`,
            `${fan}#${sn}`,
            `${fn.toUpperCase()}#${sn.toUpperCase()}`,
            `${sn.toUpperCase()}#${fn.toUpperCase()}`,
            `${fn.toUpperCase()}#${fan}`,
            `${sn.toUpperCase()}#${fan}`,
            `${fan}#${fn.toUpperCase()}`,
            `${fan}#${sn.toUpperCase()}`,
            `${fn.toLowerCase()}#${sn.toLowerCase()}`,
            `${sn.toLowerCase()}#${fn.toLowerCase()}`,
            `${fn.toLowerCase()}#${fan}`,
            `${sn.toLowerCase()}#${fan}`,
            `${fan}#${fn.toLowerCase()}`,
            `${fan}#${sn.toLowerCase()}`,
            `${fn}_${sn}`,
            `${sn}_${fn}`,
            `${fn}_${fan}`,
            `${sn}_${fan}`,
            `${fan}_${fn}`,
            `${fan}_${sn}`,
            `${fn.toUpperCase()}_${sn.toUpperCase()}`,
            `${sn.toUpperCase()}_${fn.toUpperCase()}`,
            `${fn.toUpperCase()}_${fan}`,
            `${sn.toUpperCase()}_${fan}`,
            `${fan}_${fn.toUpperCase()}`,
            `${fan}_${sn.toUpperCase()}`,
            `${fn.toLowerCase()}_${sn.toLowerCase()}`,
            `${sn.toLowerCase()}_${fn.toLowerCase()}`,
            `${fn.toLowerCase()}_${fan}`,
            `${sn.toLowerCase()}_${fan}`,
            `${fan}_${fn.toLowerCase()}`,
            `${fan}_${sn.toLowerCase()}`,
        ]
        p.innerHTML = password_array.join().replaceAll(",","<br>")
    } else {
        p.innerHTML = "All fields are required";
    }
};
