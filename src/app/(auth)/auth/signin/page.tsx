"use client"
import { useState } from 'react';
import Container from "@/components/layout/Container";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

type FormSigninType = {
  email: string;
  password: string;
};

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSigninType>();

  const onSubmit: SubmitHandler<FormSigninType> = async (form) => {
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
    <Container className="items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Masuk Akun</h1>
          <p className="text-gray-500">Masukkan kredensial Anda untuk melanjutkan</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                {...register("email", {
                  required: "Email wajib diisi",
                })}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="nama@email.com"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                {...register("password", {
                  required: "Password wajib diisi",
                  minLength: {
                    value: 4,
                    message: "Password minimal 6 karakter"
                  }
                })}
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Masuk
          </button>
        </form>
      </div>
    </Container>
  );
}