import create from "zustand";
import axios from "axios";

const initialState = {
  responsePayload: [],

  isFetching: false,
  isReady: false,
  lastFetchedAt: null,
};

export default create((set, get) => ({
  fetchData: async (url, requestPayload) => {
    if (get()[url]) {
      if (get()[url].isFetching) {
        // There is a fetch currently executing, no need to run another one
        return;
      }
      set((state) => ({
        [url]: {
          ...state[url],
          isFetching: true,
        },
      }));
    } else {
      set(() => ({
        [url]: {
          ...initialState,
          isFetching: true,
        },
      }));
    }

    try {
      const response = await axios.get(url, {
        data: requestPayload,
      });
      set(() => ({
        [url]: {
          responsePayload: response.data,
          isFetching: false,
          isReady: true,
          lastFetchedAt: +new Date(),
        },
      }));
    } catch (error) {
      console.log("Could not fetch data. Try again later.");
    }
  },
}));
