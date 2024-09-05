document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("form-section").style.display = "flex";
  }, 3000);
});

function classifyHero() {
  const heroName = document.getElementById("hero-name").value;
  const heroGender = document.getElementById("gender").value;
  const heroXP = document.getElementById("hero-xp").valueAsNumber;
  let level;

  if (!heroName || !heroGender || !heroXP) {
    document.getElementById("error-message").innerText =
      "Todos os campos são obrigatórios.";

    setTimeout(() => {
      document.getElementById("error-message").innerText = "";
    }, 3000);
    return;
  }

  if (isNaN(heroXP) || heroXP < 0) {
    document.getElementById("error-message").innerText =
      "Insira um número válido e positivo para XP.";
    return;
  }

  switch (true) {
    case heroXP <= 1000:
      level = "Ferro";
      break;
    case heroXP > 1000 && heroXP <= 2000:
      level = "Bronze";
      break;
    case heroXP > 2000 && heroXP <= 5000:
      level = "Prata";
      break;
    case heroXP > 5000 && heroXP <= 7000:
      level = "Ouro";
      break;
    case heroXP > 7000 && heroXP <= 8000:
      level = "Platina";
      break;
    case heroXP > 8000 && heroXP <= 9000:
      level = "Ascendente";
      break;
    case heroXP > 9000 && heroXP <= 10000:
      level = "Imortal";
      break;
    default:
      level = "Radiante";
  }

  let resultText;
  if (heroGender === "F") {
    resultText = `A heroína ${heroName} está no nível ${level}!`;
  } else if (heroGender === "M") {
    resultText = `O herói ${heroName} está no nível ${level}!`;
  } else {
    resultText = `@ ${heroName} está no nível ${level}!`;
  }

  document.getElementById("result").innerText = resultText;
}
