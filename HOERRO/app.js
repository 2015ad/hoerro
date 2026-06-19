document.addEventListener("DOMContentLoaded", () => {
    // 1. 현재 위치 주소 가져오기
    const locationBtn = document.getElementById("locationBtn");
    const locationResult = document.getElementById("locationResult");

    locationBtn.addEventListener("click", () => {
        locationResult.innerText = "위치 찾는 중...";

        if (!navigator.geolocation) {
            alert("이 브라우저는 위치 서비스를 지원하지 않습니다.");
            return;
        }

        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // 카카오 API를 이용한 주소 변환
            const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`;
            
            try {
                const response = await fetch(url, {
                    headers: { "Authorization": "KakaoAK 81176b66e5f396e952678f16187b5a8e" }
                });
                const data = await response.json();
                
                if (data.documents && data.documents.length > 0) {
                    const address = data.documents[0].address.address_name;
                    locationResult.innerHTML = `현재 위치: <strong>${address}</strong>`;
                } else {
                    locationResult.innerText = "주소를 찾을 수 없습니다.";
                }
            } catch (error) {
                locationResult.innerText = "주소 정보를 가져오는데 실패했습니다.";
            }
        }, (error) => {
            alert("위치 권한을 허용해주셔야 주소 확인이 가능합니다.");
            locationResult.innerText = "위치 권한을 허용해주세요.";
        });
    });

    // 2. 그래프 그리기 및 클릭 이벤트
    const ctx = document.getElementById("storeChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["강남구", "서초구", "송파구", "성북구", "노원구"],
            datasets: [{
                label: "지역별 판매점 수",
                data: [120, 90, 150, 60, 70],
                backgroundColor: [
                    "#2e7d32", "#43a047", "#66bb6a", "#81c784", "#a5d6a7"
                ],
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const i = elements[0].index;
                    const label = elements[0].chart.data.labels[i];
                    const value = elements[0].chart.data.datasets[0].data[i];
                    alert(`[${label}] 상세 데이터\n판매점 수: ${value}개\n지역 밀집도 분석 완료`);
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
});