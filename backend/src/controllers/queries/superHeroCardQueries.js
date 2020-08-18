import {ApplicationError} from "../../utils/errors";

const {SuperHero} = require('../../models/index');

export const createSuperHeroByPredicate = async predicate => {
    const createdSuperHero = await SuperHero.create(predicate);
    if (createdSuperHero) {
        return createdSuperHero;
    }
    throw new ApplicationError('can not create super hero card');
}

export const getCardsByPredicate = async (predicate, skip, limit) => {
    const foundedCards = await SuperHero.find(predicate).lean().skip(skip).limit(limit);
    if (foundedCards) {
        return foundedCards;
    }
    throw new ApplicationError('can not find cards');
}

export const findCardDataByPredicate = async (predicate) => {
    const foundedGameRoom = await SuperHero.findOne(predicate);
    if (foundedGameRoom) {
        return foundedGameRoom;
    }
    throw new ApplicationError('can not find card');
}

export const findCardAndUpdate = async (filter, update) => {
    const updatedCard = await SuperHero.findOneAndUpdate(filter, update, {new: true});
    if (updatedCard) {
        return updatedCard;
    }
    throw new ApplicationError('can not update card')
}



