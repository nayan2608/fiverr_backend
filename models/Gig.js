
import mongoose from "mongoose";
import { Schema } from "mongoose";

const gigSchema = new Schema({
     userId: {
        type: String,
        reqired: true,
     },
     title: {
        type: String,
        reqired: true,
     },
     desc: {
        type: String,
        reqired: true,
     },
     totalStars: {
        type: Number,
        default: 0,
     },
     starNumber: {
        type: Number,
        reqired: true,
     },
     cat: {
        type: String,
        reqired: true,
     },
     price: {
        type: Number,
        reqired: true,
     },
     cover: {
        type: String,
        reqired: true,
     },
     images: {
        type: [String],
        reqired: false,
     },
     shortTitle: {
        type: String,
        reqired: true,
     },
     shortDesc: {
        type: String,
        reqired: true,
     },
     deliveryTime: {
        type: Number,
        reqired: true,
     },
     revisionNumber: {
        type: Number,
        reqired: true,
     },
     features: {
        type: [String],
        reqired: false,
     },
     sales: {
        type: Number,
        default: 0,
     }
},{
    timestamps: true
})

export default mongoose.model("Gig", gigSchema);