import { Book } from "../book/Book";
import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Subscription = {
  book?: Book | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  payments?: Array<Payment>;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
