document.addEventListener("DOMContentLoaded", () => {
    // 1. 위치 확인
    document.getElementById("locationBtn").addEventListener("click", () => {
        if (!navigator.geolocation) return alert("위치 기능을 지원하지 않습니다.");
        
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const { latitude: lat, longitude: lng } = pos.coords;
            const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`;
            try {
                const res = await fetch(url, { headers: { "Authorization": "KakaoAK 81176b66e5f396e952678f16187b5a8e" }});
                const data = await res.json();
                document.getElementById("locationResult").innerText = data.documents[0].address.address_name;
            } catch {
                document.getElementById("locationResult").innerText = "주소를 가져올 수 없습니다.";
            }
        }, (err) => {
            alert("위치 권한을 허용해야 주소가 표시됩니다.");
        });
    });

    // 2. 그래프
    new Chart(document.getElementById("storeChart"), {
        type: "bar",
        data: {
            labels: ["강남구", "서초구", "송파구", "성북구", "노원구"],
            datasets: [{ label: "판매점 수", data: [120, 90, 150, 60, 70], backgroundColor: "#2e7d32" }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            onClick: (e, el) => { if(el.length > 0) alert("상세 정보: " + el[0].chart.data.labels[el[0].index] + " 데이터 확인 완료"); }
        }
    });
});