// select the ul element to insert items
const radioList = document.getElementById("radio-list");
// const radioControls =

// fetch the data from the API
fetch('https://teclead.de/recruiting/radios')
.then(response => response.json())
.then(data =>
  data["radios"].forEach((station, index) => {
    const radioTag = `
    <li id="${index}" class="radio-item">
    <p>${station.name.toUpperCase()}</p>
    <p><strong>${station.frequency}</strong></p>
    </li>
    <hr>
    <li id="dropdown${index}" class="radio-item display-none">
    <i class="fas fa-minus-circle fa-2x"></i>
    <img class="station-img" src="${station.image}" alt="${station.name} image">
    <i class="fas fa-plus-circle fa-2x"></i>
    </li>`;
    radioList.insertAdjacentHTML("beforeend", radioTag);   // insert data into html
    const stations = document.getElementById(`${index}`);
    const controls = document.getElementById('dropdown' + `${index}`);
    toggleControls = () => {
      controls.classList.toggle("display-none")
    }
    stations.addEventListener("click", toggleControls);
  })
  );
