const indexSwitch = (state = initState, action) => {
	var res = action.payload;
	switch (action.type) {
		case "START_FETCHING":
			return {
				...state,
				pending: true
			};

		case "STOP_FETCHING":
			return {
				...state,
				pending: false
			};

		case "INIT":
			return {
				...state,
				...res
			};

		case "GET_ALL_RECORDS":
			return {
				...state,
				...res,
				pending: false
			};

		case "JUMP_PAGE": 
			return {
				...state,
				...res,
				pending: false
			};

		case "HANDLE_PAGE":
			return {
				...state,
				...res
			};

		default:
			return {...state};
	}
};

const initState = {
	itemsPageIndex: 0,
	royaltiesPageIndex: 0,
	pageOfItems: 0,
	pageOfRoyalties: 0,
	royalties: [],
	items: [],
	activePage: "items",
	pageSize: 10,
	pages: ["Items", "Royalties"]
};

export default indexSwitch;