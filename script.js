// Create stars
function createStars() {
  const starsContainer = document.getElementById("stars");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    starsContainer.appendChild(star);
  }
}

// Create fireworks
function createFirework(x, y) {
  const colors = [
    "#ff6b9d",
    "#4ecdc4",
    "#ffd93d",
    "#ff6b6b",
    "#a8e6cf",
    "#45b7d1",
  ];
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = x + "px";
  firework.style.top = y + "px";

  for (let i = 0; i < 120; i++) {
    const particle = document.createElement("div");
    particle.className = "firework-particle";
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    const angle = (i * 30 * Math.PI) / 180;
    const velocity = 50 + Math.random() * 50;
    const x_vel = Math.cos(angle) * velocity;
    const y_vel = Math.sin(angle) * velocity;

    particle.style.setProperty("--x", x_vel + "px");
    particle.style.setProperty("--y", y_vel + "px");
    particle.style.transform = `translate(var(--x), var(--y))`;

    firework.appendChild(particle);
  }

  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 2000);
}

// Create confetti
function createConfetti() {
  const colors = [
    "#ff6b9d",
    "#4ecdc4",
    "#ffd93d",
    "#ff6b6b",
    "#a8e6cf",
    "#45b7d1",
  ];
  for (let i = 0; i < 0; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + "s";
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// Create music notes
function createMusicNote() {
  const notes = ["♪", "♫", "♬", "♩", "♭", "♮", "♯"];
  const note = document.createElement("div");
  note.className = "music-note";
  note.textContent = notes[Math.floor(Math.random() * notes.length)];
  note.style.left = Math.random() * 100 + "%";
  note.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(note);

  setTimeout(() => note.remove(), 5000);
}

// Auto fireworks (reduced frequency)
function autoFireworks() {
  createFirework(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight * 0.6
  );
}

// Initialize
createStars();
setInterval(autoFireworks, 6000);
setInterval(createConfetti, 8000);
setInterval(createMusicNote, 3000);
