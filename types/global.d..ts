const SneaksAPI = require("sneaks-api");

declare global {
  interface ISneaker {
    styleID: string;
    brand: string;
    shoeName: string;
    colorway: string;
    retailPrice: number;
    releaseDate: string;
    description: string;
    thumbnail: string;
  }
}

SneakerSchema = SneaksAPI

export const ISneaker =
  mongoose.models.ISneaker || mongoose.model("Sneaker", SneakerSchema);
