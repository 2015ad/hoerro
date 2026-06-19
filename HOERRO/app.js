document.addEventListener("DOMContentLoaded", () => {
    const dataInfo = {
        "강남구": "판매점 120개 | 환경 점수: 88점",
        "서초구": "판매점 90개 | 환경 점수: 85점",
        "송파구": "판매점 150개 | 환경 점수: 92점",
        "성북구": "판매점 60개 | 환경 점수: 78점",
        "노원구": "판매점 70개 | 환경 점수: 80점"
    };

    // 1. 선택 기능
    document.getElementById("regionSelect").addEventListener("change", (e) => {
        const val = e.target.value;
        document.getElementById("infoBox").innerText = dataInfo[val] || "지역을 선택해주세요.";
    });

    // 2. 그래프 그리기
    const ctx = document.getElementById("storeChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["강남구", "서초구", "송파구", "성북구", "노원구"],
            datasets: [{ label: "판매점 수", data: [120, 90, 150, 60, 70], backgroundColor: "#2e7d32" }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
});