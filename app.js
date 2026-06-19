document.addEventListener("DOMContentLoaded", () => {
    // 위치 서비스
    document.getElementById("locationBtn").addEventListener("click", () => {
        navigator.geolocation.getCurrentPosition(pos => {
            document.getElementById("locationResult").innerHTML = 
                `위도: ${pos.coords.latitude.toFixed(4)}<br>경도: ${pos.coords.longitude.toFixed(4)}`;
        });
    });

    // 그래프
    new Chart(document.getElementById("storeChart"), {
        type: "bar",
        data: {
            labels: ["강남", "서초", "송파", "성북", "노원"],
            datasets: [{ label: "판매점 수", data: [120, 90, 150, 60, 70], backgroundColor: "#2e7d32" }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
});