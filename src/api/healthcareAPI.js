import axios from "./interceptors";
import { handleResponse, handleError } from "./apiHelper";

export async function sendRequest(request, urlPath) {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_BASE_URL + urlPath,
      request,
      {
        withCredentials: true
      }
    );
    return handleResponse(response);

  } catch (error) {
    handleError(error);
  }
}
