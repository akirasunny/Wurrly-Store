import axios from "axios";

const indexReducer = {
	initialization: () => {
		return async (dispatch) => {
			try {
				var data = (await axios.get("/api/initialization")).data;
				dispatch({
					type: "INIT",
					payload: data
				});
			} catch (err) {
				console.log(err);
			}
		}
	},

	handlePageNumber: (pageNumber, section, routeName) => {
		return async (dispatch) => {
			dispatch({
				type: "START_FETCHING"
			});
			try {
				var data = (await axios.get(`/${routeName}/${pageNumber}`)).data;
				var payload = {};
				payload[routeName] = data;
				payload[section] = pageNumber;
				dispatch({
					type: "JUMP_PAGE",
					payload: payload
				})
			} catch (err) {
				console.log(err);
				dispatch({
					type: "STOP_FETCHING"
				});
			}
		}
	},

	handlePage: (activePage) => {
		return {
			type: "HANDLE_PAGE",
			payload: {
				activePage: activePage
			}
		};
	}
};

export default indexReducer;