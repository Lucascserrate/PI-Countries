import { CONTINENTS, GET_COUNTRIES, GET_SORT, POPULATION, SEARCH } from "./actions"


const initialState = {
    countries: [],
    sorting: [],

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            const a = [...action.payload]
            return {
                ...state,
                countries: action.payload,
                sorting: a,
            }
        case GET_SORT:
            const sort = action.payload === 'asc' ? state.sorting.sort((a, b) => {
                if (a.name > b.name) return 1;

                if (a.name < b.name) return -1;

                return 0;
            }) : action.payload === 'desc' ? state.sorting.sort((a, b) => {
                if (a.name > b.name) return -1;

                if (a.name < b.name) return 1;

                return 0;
            }) : [...state.countries]
            return {
                ...state,
                sorting: sort
            }
        case POPULATION:
            const sortPopulation = action.payload === 'high' ? state.sorting.sort((a, b) => b.population - a.population) :
                action.payload === 'low' ? state.sorting.sort((a, b) => a.population - b.population) : [...state.countries]
            return {
                ...state,
                sorting: sortPopulation
            }

        case CONTINENTS:
            const asd = [...state.countries]
            let filter = asd.filter(e => e.continent === action.payload)
            console.log(filter);
            return {
                ...state,
                sorting: action.payload === 'all' ? [...state.countries] : filter
            }

        case SEARCH:
            return {
                ...state,
                sorting: [action.payload]
            }
        default: return state
    }
}

export default rootReducer