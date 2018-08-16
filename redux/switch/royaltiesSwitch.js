const royaltiesSwitch = (state = initState, action) => {
	var res = action.payload;
	switch (action.type) {
		case "GET_SUMMARY":
			return {
				...state,
				...res
			};

		default:
			return {...state};
	}
};

const initState = {
	summary: {}
};

export default royaltiesSwitch;