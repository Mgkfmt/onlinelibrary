import { InputJsonValue } from "../../types";
import { SubscriptionCreateNestedManyWithoutBooksInput } from "./SubscriptionCreateNestedManyWithoutBooksInput";

export type BookCreateInput = {
  audioFile?: InputJsonValue;
  author?: string | null;
  description?: string | null;
  isFree?: boolean | null;
  publishedDate?: Date | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutBooksInput;
  title?: string | null;
};
