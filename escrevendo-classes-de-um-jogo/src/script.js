const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Hero {
  constructor(heroName, heroAge, heroClass, heroAttack) {
    (this.heroName = heroName),
      (this.heroAge = heroAge),
      (this.heroClass = heroClass),
      (this.heroAttack = heroAttack);
  }

  showMessage() {
    console.log(
      `O ${this.heroClass} ${this.heroName} de ${this.heroAge} anos atacou usando ${this.heroAttack}`
    );
  }
}

function getHeroAttack(heroClass) {
  const attacks = {
    mago: "magia",
    guerreiro: "espada",
    monge: "artes marciais",
    ninja: "shuriken",
  };

  return attacks[heroClass.toLowerCase()] || "ataque desconhecido";
}

rl.question("Digite o nome do/a herói/heróina: ", (heroName) => {
  rl.question("Digite a idade do/a herói/heróina: ", (heroAge) => {
    rl.question(
      "Qual a classe do/a herói/heroína (mago, guerreiro, monge, ninja): ",
      (heroClass) => {
        const heroAttack = getHeroAttack(heroClass);
        const userHero = new Hero(
          heroName,
          parseInt(heroAge, 10),
          heroClass,
          heroAttack
        );
        userHero.showMessage();

        rl.close();
      }
    );
  });
});
