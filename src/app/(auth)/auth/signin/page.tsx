"use client"
import Container from "@/component/layout/Container";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type FormSiigninType = {
  email: string;
  password: string;
};

export default function App() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSiigninType>();

  const onSubmit: SubmitHandler<FormSiigninType> = async (form) => {
    const load = toast.loading("Memproses Autentikasi..");
    try {
      await signIn("credentials", {
        ...form,
        redirect: false,
      });

      toast.dismiss(load);
      toast.success("Berhasil, Mengerahkan ke Halaman Masuk");
      if (form.email === "guru" && form.password === "guru")
        return router.push("/guru");
      return router.push("/");
    } catch (error: any | unknown) {
      toast.dismiss(load);
      toast.warning(error);
      toast.warning("Gagal Masuk, Periksa Email & Password kamu kembali");
    }
  };

  return (
    <Container className="items-center justify-center">
      <form
      className="flex flex-col gap-2 rounded-md border "
      onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("email")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>Password Wajib Diisi</span>}

        <input type="submit" />
      </form>
    </Container>
  );
}
