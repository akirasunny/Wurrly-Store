import axios from "axios";

const indexReducer = {
	initialization: () => {
		return async (dispatch) => {
			try {
				var data = (await axios.get("/initialization")).data;
				dispatch({
					type: "INIT",
					payload: data
				});
			} catch (err) {
				console.log(err);
			}
		}
	},

	getAllRecords: () => {
		return async (dispatch) => {
			dispatch({
				type: "START_FETCHING"
			});
			try {
				var data = (await axios.get("/records/1")).data;
				dispatch({
					type: "GET_ALL_RECORDS",
					payload: {
						records: data
					}
				});
			} catch (err) {
				console.log(err);
				dispatch({
					type: "STOP_FETCHING"
				});
			};
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


};

export default indexReducer;