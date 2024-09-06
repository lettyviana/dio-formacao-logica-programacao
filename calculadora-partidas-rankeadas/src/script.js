const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateHeroRank(victories, defeats) {
  const result = victories - defeats;

  return result;
}

function determineRank(difference) {
  let level;

  switch (true) {
    case difference < 10:
      level = "Ferro";
      break;
    case difference >= 10 && difference <= 20:
      level = "Bronze";
      break;
    case difference >= 21 && difference <= 50:
      level = "Prata";
      break;

    case difference >= 51 && difference <= 80:
      level = "Ouro";
      break;

    case difference >= 81 && difference <= 90:
      level = "Diamante";
      break;

    case difference >= 91 && difference <= 100:
      level = "Lendário";
      break;

    default:
      level = "Imortal";
      break;
  }

  return level;
}

function processHeroRankResult(heroName, heroGender, victories, defeats) {
  const difference = calculateHeroRank(victories, defeats);
  const rank = determineRank(difference);

  let resultText;
  if (heroGender.toUpperCase() === "F") {
    resultText = `A heroína ${heroName} tem o saldo de ${difference} vitórias e está no nível ${rank}`;
  } else if (heroGender.toUpperCase() === "M") {
    resultText = `O herói ${heroName} tem o saldo de ${difference} vitórias e está no nível ${rank}`;
  } else {
    resultText = `@ ${heroName} tem o saldo de ${difference} vitórias e está no nível ${rank}`;
  }

  console.log(resultText);
}

rl.question("Qual é o nome do/a herói/heroína? ", (heroName) => {
  rl.question(
    "Qual é o gênero do/a herói/heroína? (M/F/Outro?) ",
    (heroGender) => {
      rl.question("Quantas vitórias? ", (vAnswer) => {
        const victories = parseInt(vAnswer, 10);

        rl.question("Quantas derrotas? ", (dAnswer) => {
          const defeats = parseInt(dAnswer, 10);

          processHeroRankResult(heroName, heroGender, victories, defeats);

          rl.close();
        });
      });
    }
  );
});
