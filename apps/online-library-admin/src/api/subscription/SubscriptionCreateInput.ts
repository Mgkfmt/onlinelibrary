import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { PaymentCreateNestedManyWithoutSubscriptionsInput } from "./PaymentCreateNestedManyWithoutSubscriptionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  book?: BookWhereUniqueInput | null;
  endDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutSubscriptionsInput;
  startDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
