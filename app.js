document.addEventListener("DOMContentLoaded", () => {
    // 1. 위치 확인 기능
    document.getElementById("locationBtn").addEventListener("click", async () => {
        if (!navigator.geolocation) {
            alert("위치 서비스를 지원하지 않습니다.");
            return;
        }
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`;
            
            try {
                const response = await fetch(url, {
                    headers: { "Authorization": "KakaoAK 81176b66e5f396e952678f16187b5a8e" }
                });
                const data = await response.json();
                const addr = data.documents[0].address.address_name;
                document.getElementById("locationResult").innerHTML = `📍 현재 위치: ${addr}`;
            } catch (e) {
                document.getElementById("locationResult").textContent = "주소 변환에 실패했습니다.";
            }
        });
    });

    // 2. 그래프 기능
    new Chart(document.getElementById("storeChart"), {
        type: "bar",
        data: {
            labels: ["강남구", "서초구", "송파구", "성북구", "노원구"],
            datasets: [{ label: "판매점 수", data: [120, 90, 150, 60, 70], backgroundColor: "#2e7d32" }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (e, elements) => {
                if (elements.length > 0) {
                    const i = elements[0].index;
                    const label = elements[0].chart.data.labels[i];
                    const val = elements[0].chart.data.datasets[0].data[i];
                    alert(`${label} 상세 정보\n판매점 수: ${val}개`);
                }
            }
        }
    });
});