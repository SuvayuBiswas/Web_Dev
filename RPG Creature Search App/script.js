const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

const fields = [
  "creature-name", "creature-id", "weight", "height", 
  "hp", "attack", "defense", "special-attack", 
  "special-defense", "speed"
];

function clearFields() {
  fields.forEach(id => {
    document.getElementById(id).textContent = "";
  });
  document.getElementById("types").innerHTML = "";
}

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (!query) return;

  clearFields();

  fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`)
    .then(response => {
      if (!response.ok) {
        alert("Creature not found");
        throw new Error("Creature not found");
      }
      return response.json();
    })
    .then(data => {
      // Name, ID, Weight, Height
      document.getElementById("creature-name").textContent = data.name.toUpperCase();
      document.getElementById("creature-id").textContent = `#${data.id}`;
      document.getElementById("weight").textContent = data.weight;
      document.getElementById("height").textContent = data.height;

      // Stats
      const statMap = {};
      data.stats.forEach(stat => {
        statMap[stat.name] = stat.base_stat;
      });

      document.getElementById("hp").textContent = statMap["hp"];
      document.getElementById("attack").textContent = statMap["attack"];
      document.getElementById("defense").textContent = statMap["defense"];
      document.getElementById("special-attack").textContent = statMap["special-attack"];
      document.getElementById("special-defense").textContent = statMap["special-defense"];
      document.getElementById("speed").textContent = statMap["speed"];

      // Types
      const typesContainer = document.getElementById("types");
      data.types.forEach(typeObj => {
        const span = document.createElement("span");
        span.textContent = typeObj.name.toUpperCase();
        span.classList.add(typeObj.name.toLowerCase());
        typesContainer.appendChild(span);
      });
    })
    .catch(err => {
      clearFields();
      // Alert already shown above
      console.error(err); // Log the error as requested
    });
});
