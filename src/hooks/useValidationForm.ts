import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface LoginFormStateType {
  name: string;
  phone: string;
  email: string;
  gender: string;
  date: string;
  month: string;
  year: string;
  customerGroup: string;
  area: string;
  location: string;
  building: string;
  street: string;
  city: string;
  country: string;
}

const defaultValues: LoginFormStateType = {
  name: "",
  phone: "",
  email: "",
  gender: "",
  date: "",
  month: "",
  year: "",
  customerGroup: "",
  area: "",
  location: "",
  building: "",
  street: "",
  city: "",
  country: "",
};

export const genderOptions = ["male", "female", "other"];
export const dateOptions = ["1", "2", "3"];
export const monthOptions = ["12", "11", "14"];
export const yearOptions = ["2001", "2002", "2003"];
export const customerGroupOptions = ["student", "employee"];
export const locationOptions = ["unknown1", "unknown2"];
export const countryOptions = ["Vietnam", "China", "Brazil", "Germany"];

const schema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .min(10, "Phone must be at least 10 characters"),
  email: Yup.string().trim().required("Email is required"),
  gender: Yup.mixed().oneOf(genderOptions),
  date: Yup.mixed().oneOf(dateOptions),
  month: Yup.mixed().oneOf(monthOptions),
  year: Yup.mixed().oneOf(yearOptions),
  customerGroup: Yup.mixed().oneOf(customerGroupOptions),
  area: Yup.string(),
  location: Yup.mixed().oneOf(locationOptions),
  building: Yup.string(),
  street: Yup.string(),
  city: Yup.string(),
  country: Yup.mixed().oneOf(countryOptions),
});

type FormType = Yup.InferType<typeof schema>;

export default function useLoginForm() {
  const { register, handleSubmit, formState } = useForm<FormType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, formState };
}
