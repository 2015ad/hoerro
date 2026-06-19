document.addEventListener("DOMContentLoaded", () => {

    const btn =
    document.getElementById("locationBtn");

    const result =
    document.getElementById("locationResult");

    btn.addEventListener("click", () => {

        if (!navigator.geolocation) {

            result.textContent =
            "위치 서비스를 지원하지 않습니다.";

            return;
        }

        navigator.geolocation.getCurrentPosition(

            (position) => {

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

            () => {

                result.textContent =
                "위치 정보를 가져올 수 없습니다.";

            }

        );

    });

});