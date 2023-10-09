type OrderStatus = 'created' | 'pending' | 'done';

type OrderDetailsData = {
  readonly _id: string;
  readonly ingredients: string[];
  readonly status: OrderStatus;
  readonly name: string;
  readonly number: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export type OrdersListProps = {
  orders: OrderDetailsData[];
  to: string;
  isUser: boolean;
}

export type LocationState = {
  state: {
    from?: {
      pathname: string;
    };
  };
};