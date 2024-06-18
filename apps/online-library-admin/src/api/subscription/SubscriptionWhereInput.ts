import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  book?: BookWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
