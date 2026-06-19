document.addEventListener("DOMContentLoaded", () => {
    const dataMap = {
        "강남구": "판매점 120개 (밀집도 상)",
        "서초구": "판매점 90개 (밀집도 중)",
        "송파구": "판매점 150개 (밀집도 최상)",
        "성북구": "판매점 60개 (밀집도 하)",
        "노원구": "판매점 70개 (밀집도 하)"
    };

    // 지역 선택 시 정보 업데이트
    document.getElementById("regionSelect").addEventListener("change", (e) => {
        const val = e.target.value;
        document.getElementById("infoResult").innerText = val ? dataMap[val] : "지역을 선택해주세요.";
    });

    // 그래프 설정
    new Chart(document.getElementById("storeChart"), {
        type: "bar",
        data: {
            labels: ["강남구", "서초구", "송파구", "성북구", "노원구"],
            datasets: [{ label: "판매점 수", data: [120, 90, 150, 60, 70], backgroundColor: "#2e7d32" }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
});