document.addEventListener("DOMContentLoaded", function() {
  
  const projects = [
      {
          image: "./img/maze.gif",
          title: "Maze Game",
          description: "",
          link: "https://sadiqmustafayev.github.io/Maze-Game/",
          icon: "bx bxs-face-mask"
      },
      {
          image: "./img/calculator.png",
          title: "Calculator",
          description: "",
          link: "https://sadiqmustafayev.github.io/calculator-web-site/",
          icon: "bx bxs-low-vision"
      },
      {
          image: "./img/Tic_tac_toe.svg.png",
          title: "Tic-Tac-Toe",
          description: "",
          link: " https://sadiqmustafayev.github.io/Tic-Tac-Toe/",
          icon: "bx bx-desktop"
      },
      {
        image: "./img/weather.jpg",
        title: "Weather",
        description: "",
        link: " https://sadiqmustafayev.github.io/weather/",
        icon: "bx bx-desktop"
      },
      {
        image: "./img/zoo.jpg",
        title: "Zoo",
        description: "",
        link: " https://sadiqmustafayev.github.io/zoo/",
        icon: "bx bx-desktop"
      }
      
  ];

  // Layihə kontainerini seçirik
  const projectsContainer = document.getElementById("projects-container");

  // Hər bir layihə üçün HTML elementləri yaradırıq
  projects.forEach(project => {
      // Yeni bir row div-i yaratmaq
      const row = document.createElement("div");
      row.classList.add("row");

      // Layihə şəkilini əlavə edirik
      const img = document.createElement("img");
      img.src = project.image;
      row.appendChild(img);

      // Layer div-i əlavə edirik
      const layer = document.createElement("div");
      layer.classList.add("layer");

      // Başlıq əlavə edirik
      const h5 = document.createElement("h5");
      h5.textContent = project.title;
      layer.appendChild(h5);

      // Təsvir əlavə edirik
      const p = document.createElement("p");
      p.textContent = project.description;
      layer.appendChild(p);

      // İcon linkini əlavə edirik
      const a = document.createElement("a");
      a.href = project.link;
      a.target = "_blank";  // Yeni tabda açmaq
      const icon = document.createElement("i");
      icon.classList.add(...project.icon.split(" ")); // Class-ları əlavə edirik
      icon.style.color = "aliceblue";
      a.appendChild(icon);
      layer.appendChild(a);

      // Layer-i row-a əlavə edirik
      row.appendChild(layer);

      // Row-u kontainerə əlavə edirik
      projectsContainer.appendChild(row);
  });
});
