document.addEventListener("DOMContentLoaded",()=>{

const btn =
document.getElementById("locationBtn");

const result =
document.getElementById("locationResult");

btn.addEventListener("click",()=>{

    navigator.geolocation.getCurrentPosition(

        (position)=>{

            const lat =
            position.coords.latitude;

            const lng =
            position.coords.longitude;

            result.innerHTML =
            `
            위도 : ${lat}<br>
            경도 : ${lng}
            `;
        },

        ()=>{
            result.textContent =
            "위치를 불러올 수 없습니다.";
        }

    );

});

});