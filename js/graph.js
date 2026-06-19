document.addEventListener("DOMContentLoaded", () => {

    const ctx =
    document.getElementById("storeChart");

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "강남구",
                "서초구",
                "송파구",
                "성북구",
                "노원구"
            ],

            datasets: [

                {
                    label: "판매점 수",

                    data: [
                        120,
                        90,
                        150,
                        60,
                        70
                    ]
                }

            ]

        }

    });

});