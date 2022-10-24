import { useMutation } from "react-query";
import ApiCall from "_core/client/apiCall";

export const useContactUs = () =>
  useMutation((params) => ApiCall("POST", "public/contact-us", params));

export const useSubscribe = () =>
  useMutation((params) => ApiCall("POST", "public/subscribe", params));
