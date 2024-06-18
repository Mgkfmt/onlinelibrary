import { InputJsonValue } from "../../types";
import { SubscriptionUpdateManyWithoutBooksInput } from "./SubscriptionUpdateManyWithoutBooksInput";

export type BookUpdateInput = {
  audioFile?: InputJsonValue;
  author?: string | null;
  description?: string | null;
  isFree?: boolean | null;
  publishedDate?: Date | null;
  subscriptions?: SubscriptionUpdateManyWithoutBooksInput;
  title?: string | null;
};
