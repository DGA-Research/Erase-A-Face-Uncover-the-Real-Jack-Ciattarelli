document.addEventListener("DOMContentLoaded", () => {
    fetch("config.json")
      .then(response => response.json())
      .then(config => {
        const gameContainer = document.getElementById("gameContainer");
        const { cardFaces, backFaces, totalCards } = config;
  
        for (let i = 0; i < totalCards; i++) {
          const card = document.createElement("div");
          card.classList.add("card");
  
          // Front face
          const frontImage = cardFaces[i % cardFaces.length];
          // Back face (cycled or randomized)
          //const backImage = backFaces[i % backFaces.length];
           const backImage = backFaces[Math.floor(Math.random() * backFaces.length)];
  
          card.innerHTML = `
            <div class="card-inner">
              <div class="card-face card-front" style="background-image: url('${frontImage}');"></div>
              <div class="card-face card-back" style="background-image: url('${backImage}');"></div>
            </div>
          `;
  
          card.addEventListener("click", () => {
            card.classList.toggle("flipped");
          });
  
          gameContainer.appendChild(card);
        }

            // RESET BUTTON: flip all cards back
            const resetButton = document.getElementById("resetButton");
            resetButton.addEventListener("click", () => {
            // Select any currently flipped cards
            const flippedCards = document.querySelectorAll(".card.flipped");
            // Remove the "flipped" class so they return to front face
            flippedCards.forEach(card => card.classList.remove("flipped"));
            });
        })

      .catch(error => console.error("Error loading config:", error));
  });
  