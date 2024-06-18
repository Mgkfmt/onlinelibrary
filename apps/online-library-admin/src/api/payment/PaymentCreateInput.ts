import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  subscription?: SubscriptionWhereUniqueInput | null;
  transactionDate?: Date | null;
  transactionId?: string | null;
};
