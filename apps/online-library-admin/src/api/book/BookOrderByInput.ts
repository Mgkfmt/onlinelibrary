import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  audioFile?: SortOrder;
  author?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isFree?: SortOrder;
  publishedDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
