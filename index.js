document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    requestImages();
  }
});

document.querySelector("#loupe").addEventListener("click", () => {
  requestImages();
});

function requestImages() {
  const value = document.querySelector("#input").value;
  createFetch(value);
}

function createFetch(value) {
  document.querySelector("#addImages").textContent = "";

  const url =
    "https://api.unsplash.com/search/photos?query=" +
    `${value}` +
    "&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";

  fetch(url)
    .then((res) => res.json())
    .then((data) => showImages(data));
}

function showImages(data) {
  for (let i = 0; i < data.results.length; i++) {
    const img = document.createElement("img");

    img.className = "picture";

    img.style.backgroundImage = `url(${data.results[i].urls.raw}`;

    document.querySelector("#addImages").appendChild(img);

    img.addEventListener("dblclick", () => {
      window.open(data.results[i].links.download, "_blank");
    });
  }
}
