document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    requestImage();
  }
});

document.querySelector("#loupe").addEventListener("click", () => {
  requestImage();
});

function requestImage() {
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
    .then((data) => showImage(data));
}

function showImage(data) {
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
