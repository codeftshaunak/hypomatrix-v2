import { ServiceResponseType } from "./types";

export const cmsFetch = (options: RequestInit) =>
  fetch(process.env.CMS_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

export const asyncWrapper =
  <T, Args extends any[] = []>(
    asyncFunc: (...args: Args) => Promise<T | null>
  ) =>
  async (...args: Args): Promise<ServiceResponseType<T>> => {
    try {
      const data = await asyncFunc(...args);
      return { data, errors: [] };
    } catch (error: any) {
      if (process.env.NODE_ENV === "development") {
        console.log("ERROR:", error);
      }

      if (Array.isArray(error)) {
        return { data: null, errors: error };
      }

      return {
        data: null,
        errors: [{ message: error?.message || "Error in Data Fetching" }],
      };
    }
  };
