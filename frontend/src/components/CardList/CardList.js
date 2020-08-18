import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from "../../constants";
import {connect} from "react-redux";
import {createGetSuperHeroCardsRequest} from "../../actions/actionCreators";
import {InfiniteScroll} from "react-simple-infinite-scroll";
import styles from './CardList.module.sass'
import CardItem from "../CardItem/CardItem";

const CardList = ({getCards, isFetching, hasMore, cards}) => {

    const getCardsWithFilter = skip => {
        getCards({limit: CONSTANTS.GET_CARDS_LIMIT, skip})
    }

    useEffect(()=> {
        getCardsWithFilter(0);
    }, [])

    return (
            <InfiniteScroll
                throttle={100}
                threshold={300}
                isLoading={isFetching}
                hasMore={hasMore}
                onLoadMore={() => {
                    getCardsWithFilter(cards.length)
                }
                }>
                <section className={styles.cardsListContainer}>
                    {cards.length > 0 ?
                        cards.map((card, index) => (<CardItem key={index} {...card}/>)) :
                        !isFetching && <div>No created card lists</div>
                    }
                    {isFetching && 'Loading'}
                </section>
            </InfiniteScroll>

    );
};

const mapStateToProps = state => state.cardsStore;
const mapDispatchToProps = dispatch => ({
    getCards: filter => dispatch(createGetSuperHeroCardsRequest(filter)),
})

CardList.propTypes = {
    getCards: PropTypes.func.isRequired,
    isFetching: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
    cards: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);