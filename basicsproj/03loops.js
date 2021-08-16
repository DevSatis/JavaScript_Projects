const names = ["Youtube", "Netflix", "Amazon", "Instagram", "Facebook", "twitter"];

for(const n of names){
    console.log(n);
}

const symbols = {
    yt: "youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline.in",
}

for(const n in symbols){
    console.log(`Key is ${n} and the value is: ${symbols[n]}`);
}