import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  subscriptionId?: SortOrder;
  transactionDate?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
