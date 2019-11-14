import axios from "axios";

export const FETCH_CAMPAIGN_START = "FETCH_CAMPAIGN_START";
export const FETCH_CAMPAIGN_SUCCESS = "FETCH_CAMPAIGN_SUCCESS";
export const FETCH_CAMPAIGN_ERROR = "FETCH_EPISODE_ERROR";

export function fetchCampaign() {
  return dispatch => {
    dispatch({ type: FETCH_CAMPAIGN_START });

    axios
      .get("https://saving-the-animals.herokuapp.com/api/campaigns/supporters")
      .then(res => {
        dispatch({ type: FETCH_CAMPAIGN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_CAMPAIGN_ERROR, payload: err.response });
      });
  };
}
