import React from 'react';
import styles from './Header.module.sass';
import {Link} from "react-router-dom";
import Button from "../forms/Button";
import PropTypes from "prop-types";

const Header = ({disableMainPageBtn, disableCreateCardPageBtn}) => {


    return (
        <section className={styles.header}>
                           <Button disabled={disableMainPageBtn}>
                                <Link to={'/'}>Main page</Link>
                            </Button>
                            <Button disabled={disableCreateCardPageBtn}>
                                <Link to={'/create_superhero_card'}>Create SuperHero card</Link>
                            </Button>

        </section>
    );
};


Header.propTypes = {
    disableMainPageBtn: PropTypes.bool,
    disableCreateCardPageBtn: PropTypes.bool
}

export default Header;