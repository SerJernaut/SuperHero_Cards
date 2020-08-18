import React from 'react';
import styles from './CardItem.module.sass';
import PropTypes from 'prop-types';
import Avatar from "../Avatar/Avatar";
import Button from "../forms/Button";
import {Link} from "react-router-dom";

const CardItem = ({_id, nickname, real_name, catch_phrase, origin_description, superpowers, image}) => {

    return (
        <div className={styles.cardContainer}>
                <p>
                    <span>{nickname}</span>
                </p>
                <p>
                    Real name: <span>{real_name}</span>
                </p>
                <p>
                    Catch phrase: <span>"{catch_phrase}"</span>
                </p>
                <p>
                    Origin description: <span>{origin_description}</span>
                </p>
                <p>
                    Super powers: <span>{superpowers}</span>
                </p>
            <Link to={`/update_superhero_card/${_id}`}><Button>Click here if u want to update card</Button>
                </Link>
            <Avatar image={image}/>
        </div>
    )
}

CardItem.propTypes = {
    _id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    real_name: PropTypes.string.isRequired,
    catch_phrase: PropTypes.string.isRequired,
    origin_description: PropTypes.string.isRequired,
    superpowers: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default CardItem;