import {api} from "@/app/services/apiBase";


export const fetchPackageInfo = async (packageId: string) => {
  try {
    const response = await api.get(`/quiz/packages/${packageId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch quiz data:', error);
    throw error;
  }
};

export const postPackageInfo = async (name: string, difficulty: number, author: string) => {
  try {
    const response = await api.post(`/quiz/packages/`, {
      name, difficulty, author
    });
    return response.data;
  } catch (error) {
    console.error('Failed to post quiz data:', error);
    throw error;
  }
};

export const postTagInfo = async (tag_names: string, package_id: string) => {
  try {
    const response = await api.post(`/quiz/tag/`, {
      tag_names, package_id
    });
    console.log("response", response)
    return response.data;
  } catch (error) {
    console.error('Failed to post tag quiz data request:', error);
    throw error;
  }
};



