document.addEventListener(
"DOMContentLoaded",
()=>{

const btn =
document.getElementById(
"locationBtn"
);

const result =
document.getElementById(
"locationResult"
);

btn.addEventListener(
"click",
()=>{

navigator.geolocation
.getCurrentPosition(

(position)=>{

const lat =
position.coords.latitude;

const lng =
position.coords.longitude;

result.innerHTML = `
위도 : ${lat}<br>
경도 : ${lng}
`;

},

()=>{
result.innerHTML =
"위치 확인 실패";
}

);

}
);

const ctx =
document.getElementById(
"storeChart"
);

new Chart(ctx,{

type:"bar",

data:{

labels:[
"강남구",
"서초구",
"송파구",
"성북구",
"노원구"
],

datasets:[{

label:"판매점 수",

data:[
120,
90,
150,
60,
70
]

}]

},

options:{
responsive:true
}

});

});