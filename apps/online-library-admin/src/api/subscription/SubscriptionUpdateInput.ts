import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { PaymentUpdateManyWithoutSubscriptionsInput } from "./PaymentUpdateManyWithoutSubscriptionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  book?: BookWhereUniqueInput | null;
  endDate?: Date | null;
  payments?: PaymentUpdateManyWithoutSubscriptionsInput;
  startDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
