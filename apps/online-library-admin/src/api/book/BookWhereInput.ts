import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type BookWhereInput = {
  audioFile?: JsonFilter;
  author?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isFree?: BooleanNullableFilter;
  publishedDate?: DateTimeNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
  title?: StringNullableFilter;
};
