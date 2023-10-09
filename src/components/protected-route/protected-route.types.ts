import {ReactNode} from "react";

export type ProtectedRouteProps = {
  children: ReactNode;
  anonymous: boolean
}

export type LocationState = {
  state: {
    from?: {
      pathname: string;
    };
  };
};