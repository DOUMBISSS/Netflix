const initialState = {
    categories: [],
    products: [],
    newArrivages:[],
    news:[
        {
            id:1,
            title: 'Sweats',
            img:'https://mistertee.fr/sites/default/files/styles/mistertee_product_display_medium/public/hoodie.jpg',
            description:"Sweats Blanc",
            price:"1000",
            categories:"Sweats",
            genre:"Homme",
        },
        {
            id:2,
            title: 'Sweats',
            img:'https://www.kiabi.be/images/sweat-a-capuche-friends-bordeaux-femme-du-34-au-48-yt181_1_frb1.jpg',
            description:"Sweats Marron",
            price:"1000",
            categories:"Sweats",
            genre:"Homme",
        },
        {
            id:3,
            title: 'Sweats',
            img:'https://mistertee.fr/sites/default/files/styles/mistertee_product_display_medium/public/hoodie.jpg',
            description:"Sweats Blanc",
            price:"1000",
            categories:"Sweats",
            genre:"Homme",
        },
        {
            id:4,
            title: 'Sweats',
            img:'https://mistertee.fr/sites/default/files/styles/mistertee_product_display_medium/public/hoodie.jpg',
            description:"Sweats Blanc",
            price:"1000",
            categories:"Sweats",
            genre:"Homme",
        },
    ],
    article:{},
}

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-CATEGORIES-SMART": {
            return {
                ...state,categories : action.payload
            }
        }
        case "GET-ALL-ARTICLES": {
            return {
                ...state,products : action.payload
            }
        }
        case "GET-ARTICLE": {
            return {
                ...state,article : action.payload
            }
        }
        case "GET-NEW-ARRIVAGES": {
            return {
                ...state,newArrivages: action.payload
            }
        }
        default: {
            return state
        }
    }
  
}