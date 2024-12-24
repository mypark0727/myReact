import axios from "axios";
import apiCommon from "@/api/apiCommon";

// grid row data
export const gridRowData = async (params) => {
  try {
    const response = await apiCommon.get(params.url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default gridRowData;
