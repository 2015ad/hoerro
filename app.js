document.addEventListener("DOMContentLoaded", () => {
    const data = {
        "강남구": "강남구: 판매점 120개 (환경지수 88)",
        "서초구": "서초구: 판매점 90개 (환경지수 85)",
        "송파구": "송파구: 판매점 150개 (환경지수 92)",
        "성북구": "성북구: 판매점 60개 (환경지수 78)",
        "노원구": "노원구: 판매점 70개 (환경지수 80)"
    };

    const selectBox = document.getElementById("regionSelect");
    const infoBox = document.getElementById("infoBox");

    // 선택 박스가 변경될 때 실행
    selectBox.addEventListener("change", (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && data[selectedValue]) {
            infoBox.innerText = data[selectedValue];
        } else {
            infoBox.innerText = "지역을 선택해주세요.";
        }
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