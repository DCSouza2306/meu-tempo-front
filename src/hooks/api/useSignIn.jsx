import { authenticationApi } from "../../services/authApi";
import useAsync from "../useAsync";

export function useSignIn(){
    const {
        data: signInData,
        loading: signInLoading,
        error: signInError,
        task: signIn
      } = useAsync(authenticationApi.signIn, false);
    
      return {
        signInData,
        signInLoading,
        signInError,
        signIn
      };
}