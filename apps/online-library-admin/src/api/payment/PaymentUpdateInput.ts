import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  subscription?: SubscriptionWhereUniqueInput | null;
  transactionDate?: Date | null;
  transactionId?: string | null;
};
