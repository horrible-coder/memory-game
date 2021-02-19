const boardItems = () => {
  const items = [];
  const randomArray = [];
  const images = [];
  for (let i = 1; i <= 8; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
    randomArray.push(randomNumber);
  }
  randomArray.sort(() => 0.5 - Math.random());

  for (let i = 1; i <= 16; i++) {
    images.push(
      "https://pokeres.bastionbot.org/images/pokemon/" +
        randomArray[i - 1] +
        ".png"
    );
    items.push({
      id: i,
      number: randomArray[i - 1],
      url: images[i - 1],
      open: false,
    });
  }

  cacheImages(images);

  return items;
};

const cacheImages = async (imageSrc) => {
  const promises = await imageSrc.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });

  await Promise.all(promises);
};

export default boardItems;
