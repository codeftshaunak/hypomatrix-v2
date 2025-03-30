export type ServiceResponseType<T> = {
  data: T | null;
  errors?: { message: string }[];
};
