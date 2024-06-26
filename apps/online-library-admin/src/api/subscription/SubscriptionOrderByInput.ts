import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  bookId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
