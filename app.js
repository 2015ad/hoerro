document.addEventListener("DOMContentLoaded", () => {
    // 1. 현재 위치 주소 변환
    document.getElementById("locationBtn").addEventListener("click", async () => {
        if (!navigator.geolocation) return;
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const { latitude: lat, longitude: lng } = pos.coords;
            const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`;
            const response = await fetch(url, { headers: { "Authorization": "KakaoAK 81176b66e5f396e952678f16187b5a8e" }});
            const data = await response.json();
            const addr = data.documents[0].address.address_name;
            document.getElementById("locationResult").innerHTML = `현재 위치: <strong>${addr}</strong>`;
        });
    });

    // 2. 그래프 및 클릭 이벤트 설정
    const ctx = document.getElementById("storeChart");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["강남", "서초", "송파", "성북", "노원"],
            datasets: [{ label: "판매점 수", data: [120, 90, 150, 60, 70], backgroundColor: "#2e7d32" }]
        },
        options: {
            responsive: true,
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const label = elements[0].chart.data.labels[index];
                    const value = elements[0].chart.data.datasets[0].data[index];
                    alert(`${label} 지역 상세 정보\n판매점 수: ${value}개\n데이터 분석 완료.`);
                }
            }
        }
    });
});