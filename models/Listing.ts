
import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    seller: { type: String, required: true },
    buyer: { type: String, default: "0x0000000000000000000000000000000000000000" },
    nftContract: { type: String, required: true },
    tokenId: { type: String, required: true },
    price: { type: String, required: true },
    createdAt: { type: String, required: true },
    status: { type: String, enum: ["ACTIVE", "SOLD", "CANCELED"], default: "ACTIVE" },
  },
  { timestamps: true }
);

export const ListingModel = mongoose.models.Listing || mongoose.model("Listing", ListingSchema);
