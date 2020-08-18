import {
    createSuperHeroByPredicate,
    getCardsByPredicate,
    findCardDataByPredicate,
    findCardAndUpdate
} from './queries/superHeroCardQueries';

export const createSuperHeroCardAndSend = async (req, res, next) => {
    try {
        const {body} = req;
        const superHeroData = await createSuperHeroByPredicate({...body});
        const objSuperHeroData = superHeroData.toObject();
        res.send (
            objSuperHeroData
        )
    } catch (e) {
        next(e);
    }
};
export const getPaginatedCardsAndSend = async (req, res, next) => {
    try{
        const {body: {skip, limit}} = req;
        const cards = await getCardsByPredicate({}, skip, limit);
        res.send({cards, hasMore: limit <= cards.length})
    }
    catch (e) {
        next(e)
    }
}

export const getCardById = async (req, res, next) => {
    try{
        const {body: {id}} = req;
        const foundedCard = await findCardDataByPredicate({_id: id});
        res.send(foundedCard);
    }
    catch (e) {
        next(e);
    }
}

export const updateCardById = async (req, res, next) => {
    try{
        const {body: {id, nickname, real_name, origin_description, superpowers, catch_phrase}} = req;
        const foundedCard = await findCardAndUpdate({_id: id}, {
            nickname,
            real_name,
            origin_description,
            superpowers,
            catch_phrase
        });
        res.send(foundedCard);

    }
    catch(e) {
        next(e);
    }
}




