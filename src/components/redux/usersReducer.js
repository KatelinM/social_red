const initialState = {
    users: [
        {id: 1, img: 'https://zoko.com.ua/sites/default/files/styles/s650xauto/public/products/gpp51076.jpg?itok=6bVjj0rO', name: "Anna", status: "I'm happy", location: {city: 'Minsk', country: 'Bel'}, isFollowed: false},
        {id: 2, img: 'https://zoko.com.ua/sites/default/files/styles/s650xauto/public/products/gpp51076.jpg?itok=6bVjj0rO', name: "Alex", status: "I'm happy", location: {city: 'Minsk', country: 'Bel'}, isFollowed: false},
        {id: 3, img: 'https://zoko.com.ua/sites/default/files/styles/s650xauto/public/products/gpp51076.jpg?itok=6bVjj0rO', name: "Taylor", status: "I'm happy", location: {city: 'Minsk', country: 'Bel'}, isFollowed: false},
        {id: 4, img: 'https://zoko.com.ua/sites/default/files/styles/s650xauto/public/products/gpp51076.jpg?itok=6bVjj0rO', name: "Swift", status: "I'm happy", location: {city: 'Minsk', country: 'Bel'}, isFollowed: false},
    ],
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLEFOLLOW':
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id !== action.userId) {
                        return u
                    } else {
                        return {
                            ...u,
                            isFollowed: !u.isFollowed
                        }
                    }
                })
            };
        default:
            return state
    }
};

export const toggleFollowAC = (userId) => ({type: 'TOGGLEFOLLOW', userId});

export default usersReducer