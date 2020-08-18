import mongoose from 'mongoose';
import CONSTANTS from "../constants";
import SuperHero from "./SuperHeroCard";

const {MONGO_DB_URL} = CONSTANTS;

mongoose.connect(MONGO_DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export {
  SuperHero
};
