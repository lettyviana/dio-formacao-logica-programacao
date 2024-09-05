const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function determineLevel(heroXP) {
  let level;

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

  return level;
}

rl.question("Digite o nome do se herói/heroína: ", (heroName) => {
  rl.question("Informe seu gênero (M/F/Outro): ", (heroGender) => {
    rl.question("Tem quanto de XP? ", (xpAnswer) => {
      const heroXP = parseInt(xpAnswer, 10);
      const level = determineLevel(heroXP);

      let resultText;

      if (heroGender.toUpperCase() === "F") {
        resultText = `A heroína ${heroName} está no nível ${level}!`;
      } else if (heroGender.toUpperCase() === "M") {
        resultText = `O herói ${heroName} está no nível ${level}!`;
      } else {
        resultText = `@ ${heroName} está no nível ${level}!`;
      }

      console.log(resultText);
      rl.close();
    });
  });
});
