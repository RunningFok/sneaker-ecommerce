const SneaksAPI = require("sneaks-api");

export default async function SearchByKeyword(
  keyword: string | string[] | null
): Promise<ISneaker[]> {
  const sneaks = new SneaksAPI();
  return await new Promise<ISneaker[]>((resolve, reject) => {
    sneaks.getProducts(
      keyword,
      100,
      function (err: Error, products: any[]) {
        const sneakersResult: ISneaker[] = [];
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

          sneakersResult.push(newSneaker);
        });
        resolve(sneakersResult);
        return sneakersResult;
      },
      (errorResponse: Error) => {
        reject(errorResponse);
      }
    );
  });
}
