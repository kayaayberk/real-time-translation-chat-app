// https://github.com/invertase/stripe-firebase-extensions/blob/next/firestore-stripe-payments/functions/src/interfaces.ts

import { DocumentData, DocumentReference, Timestamp } from "firebase/firestore";
import Stripe from "stripe";

export interface Subscription {
  id?: string;
  /**
   * Set of key-value pairs that you can attach to an object.
   * This can be useful for storing additional information about the object in a structured format.
   */
  metadata: {
    [name: string]: string;
  };
  stripeLink: string;
  role: string | null;
  quantity: number;
  items: Stripe.SubscriptionItem[];
  /**
   * Firestore reference to the product doc for this Subscription.
   */
  product: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
  /**
   * Firestore reference to the price for this Subscription.
   */
  price: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
  /**
   * Array of price references. If you prvoide multiple recurring prices to the checkout session via the `line_items` parameter,
   * this array will hold the references for all recurring prices for this subscription. `price === prices[0]`.
   */
  prices: Array<
    FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
  >;
  payment_method?: string;
  latest_invoice?: string;
  /**
   * The status of the subscription object
   */
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "paused"
    | "trialing"
    | "unpaid";
  /**
   * If true the subscription has been canceled by the user and will be deleted at the end of the billing period.
   */
  cancel_at_period_end: boolean;
  /**
   * Time at which the object was created.
   */
  created: FirebaseFirestore.Timestamp;
  /**
   * Start of the current period that the subscription has been invoiced for.
   */
  current_period_start: FirebaseFirestore.Timestamp;
  /**
   * End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
   */
  current_period_end: FirebaseFirestore.Timestamp;
  /**
   * If the subscription has ended, the timestamp of the date the subscription ended.
   */
  ended_at: FirebaseFirestore.Timestamp | null;
  /**
   * A date in the future at which the subscription will automatically get canceled.
   */
  cancel_at: FirebaseFirestore.Timestamp | null;
  /**
   * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will still reflect the date of the initial cancellation request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
   */
  canceled_at: FirebaseFirestore.Timestamp | null;
  /**
   * If the subscription has a trial, the beginning of that trial.
   */
  trial_start: FirebaseFirestore.Timestamp | null;
  /**
   * If the subscription has a trial, the end of that trial.
   */
  trial_end: FirebaseFirestore.Timestamp | null;
}
