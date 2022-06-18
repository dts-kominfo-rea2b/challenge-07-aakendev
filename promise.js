const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve) => {
    let scoreEmosi = 0;
    promiseTheaterIXX()
      .then((hasilSetelahMenonton) => {
        hasilSetelahMenonton.forEach((item) => {
          if (item.hasil === emosi) {
            scoreEmosi += 1;
          }
        });
      })
      .then(
        promiseTheaterVGC().then((hasilSetelahMenonton) => {
          hasilSetelahMenonton.forEach((item) => {
            if (item.hasil === emosi) {
              scoreEmosi += 1;
            }
          });
          resolve(scoreEmosi);
        })
      );
  });
};

module.exports = {
  promiseOutput,
};
