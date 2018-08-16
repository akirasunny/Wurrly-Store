import axios from "axios";

const royaltiesReducer = {
	getSummary: () => {
		return async (dispatch) => {
			try {
				var summary = (await axios.get("/api/get-summary")).data;
				dispatch({
					type: "GET_SUMMARY",
					payload: {
						summary: summary
					}
				});
			} catch (err) {
				console.log(err);
			}
		}
	}
};

export default royaltiesReducer;