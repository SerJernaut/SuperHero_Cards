import React, {useState} from 'react';
import {URL} from "../../constants/URLs";
import LightBox from "react-image-lightbox";
import styles from './Avatar.module.sass';
import PropTypes from 'prop-types';
import 'react-image-lightbox/style.css';

const Avatar = ({image}) => {
    const [isOpenPhoto, setIsOpenPhoto] = useState(false);

    return (
        <>
            <img className={styles.image} src={`${URL["PUBLIC-ADS"]}${image}`} onClick={()=> setIsOpenPhoto(true)} alt="image"/>
            {isOpenPhoto && <LightBox
                mainSrc={`${URL["PUBLIC-ADS"]}${image}`}
                onCloseRequest={() => setIsOpenPhoto(false)}/>}
        </>
    );
};

Avatar.propTypes = {
    image: PropTypes.string.isRequired
}

export default Avatar;