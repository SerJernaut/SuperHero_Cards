const FIELDS = {
    superHeroCardInputFields: [
        {
            name: 'nickname',
            type: 'text',
            placeholder: 'NickName',
            label: 'NickName'
        },
        {
            name: 'real_name',
            type: 'text',
            placeholder: 'Real name',
            label: 'Real name'
        }
    ],
    superHeroCardTextAreaFields: [
        {
            name: 'origin_description',
            component: 'textarea',
            placeholder: 'Origin description',
            rows: '7',
            label: 'Origin description'
        },
        {
            name: 'superpowers',
            component: 'textarea',
            placeholder: 'Super powers',
            rows: '5',
            label: 'Super powers'
        },
        {
            name: 'catch_phrase',
            component: 'textarea',
            placeholder: 'Catch phrase',
            rows: '3',
            label: 'Catch phrase'
        },
    ]
}

export default FIELDS;
