const SneaksAPI = require("sneaks-api");

export default async function FetchSneakerID({
  styleID,
}: {
  styleID: string;
}): Promise<ISneaker> {
  const sneaks = new SneaksAPI();
  const id = styleID;
  return await new Promise<ISneaker>((resolve, reject) => {
    sneaks.getProductPrices(
      id,
      function (err: Error, product: any) {
        const sneaker: ISneaker = {
          styleID: product.styleID,
          brand: product.brand,
          shoeName: product.shoeName,
          colorway: product.colorway,
          retailPrice: product.retailPrice,
          releaseDate: product.releaseDate,
          description: product.description,
          thumbnail: product.thumbnail,
        };
        resolve(sneaker);
        return sneaker;
      },
      (errorResponse: Error) => {
        reject(errorResponse);
      }
    );
  });
}
