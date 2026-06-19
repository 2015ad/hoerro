const stores = [
    "GS25 성북점",
    "CU 안암점",
    "이마트24 고려대점"
];

document
.getElementById("locationBtn")
.addEventListener("click", () => {

    const list =
    document.getElementById("storeList");

    list.innerHTML = "";

    stores.forEach(store => {

        const li =
        document.createElement("li");

        li.textContent = store;

        list.appendChild(li);
    });

});