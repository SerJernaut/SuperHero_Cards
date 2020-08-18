import React  from 'react';
import { withRouter }       from 'react-router';
import Header from "../../components/Header";
import CardList from "../../components/CardList/CardList";

const MainPage = () => {

        return (
            <>
                <Header disableMainPageBtn={true}/>
                <CardList/>
            </>
        );

}

export default withRouter( MainPage );