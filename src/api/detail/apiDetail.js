import axios from "axios";
import apiCommon from "@/api/apiCommon";

// getDetail data
export const getDetail = async (params) => {
  try {
    const response = await apiCommon.get(params.url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { getDetail };
