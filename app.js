document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("locationBtn").addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;

                // 카카오 로컬 API 호출 (주소 변환)
                const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`;
                const response = await fetch(url, {
                    headers: { "Authorization": "KakaoAK 81176b66e5f396e952678f16187b5a8e" } // 무료 공개 테스트 키
                });
                const data = await response.json();

                if (data.documents && data.documents[0]) {
                    const addr = data.documents[0].address.address_name;
                    document.getElementById("locationResult").innerHTML = `현재 위치: <strong>${addr}</strong>`;
                } else {
                    document.getElementById("locationResult").textContent = "주소를 찾을 수 없습니다.";
                }
            });
        }
    });

    // 기존 그래프 코드
    new Chart(document.getElementById("storeChart"), {
        type: "bar",
        data: {
            labels: ["강남", "서초", "송파", "성북", "노원"],
            datasets: [{ label: "판매점 수", data: [120, 90, 150, 60, 70], backgroundColor: "#2e7d32" }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
});