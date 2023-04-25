const initialState = {
    Movies:[
       {
        id: 1,
        title:'Django',
        img:'https://i.ytimg.com/vi/gmH8DgvO7Kc/maxresdefault.jpg',
        description:'Django 2023',
        time:'1h20 min'
       },
       {
        id: 2,
        title:'Django 2',
        img:'https://i.ytimg.com/vi/gmH8DgvO7Kc/maxresdefault.jpg',
        description:'Django 2023',
        time:'1h20 min'
       },
       {
        id: 3,
        title:'Transporteur',
        img:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E8CB67DA3665465F8F1165CF3387368C24F61F0407E80B71C6242A0D764439D4/scale?width=1200&aspectRatio=1.78&format=jpeg',
        description:'Django 2023',
        time:'1h20 min'
       }
    ],
}

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-ALL-MOVIES": {
            return {
                ...state,movies : action.payload
            }
        }
        default: {
            return state
        }
    }
  
}