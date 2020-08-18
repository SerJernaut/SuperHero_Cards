import React from 'react';
import CreateSuperHeroCardForm from "../../components/forms/CreateSuperHeroCardForm/CreateSuperHeroCardForm";
import Header from "../../components/Header";

const CreateSuperHeroCardPage = () => {
    return (
        <div>
            <Header disableCreateCardPageBtn={true}/>
            <CreateSuperHeroCardForm/>
        </div>
    );
}

export default CreateSuperHeroCardPage;