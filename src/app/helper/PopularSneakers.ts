const SneaksAPI = require("sneaks-api");

export default async function PopularSneakers(): Promise<ISneaker[]> {
  const sneaks = new SneaksAPI();

  return await new Promise<ISneaker[]>((resolve, reject) => {
    sneaks.getMostPopular(
      10,
      function (err: Error, products: any[]) {
        const popularSneakers: ISneaker[] = [];
        products.map(function (sneaker) {
          const newSneaker: ISneaker = {
            styleID: sneaker.styleID,
            brand: sneaker.brand,
            shoeName: sneaker.shoeName,
            colorway: sneaker.colorway,
            retailPrice: sneaker.retailPrice,
            releaseDate: sneaker.releaseDate,
            description: sneaker.description,
            thumbnail: sneaker.thumbnail,
          };

          popularSneakers.push(newSneaker);
        });
        resolve(popularSneakers);
        return popularSneakers;
      },
      (errorResponse: Error) => {
        reject(errorResponse);
      }
    );
  });
}
