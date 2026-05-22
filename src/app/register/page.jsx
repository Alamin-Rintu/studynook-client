"use client";

import { authClient } from "@/lib/auth-client";
import registerImg from "../../../public/assests/register1.jpg";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    console.log(user);
    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      image: user.image,
      password: user.password,
    });

    if (data) {
      toast.success("Registration successful! Please login.");
      router.push("/login");
    }

    if (error) {
      toast.error(error.message);
    }

    console.log(data, error);
  };

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      toast.success("Google Login Successfull");
    }
    router.push("/");
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-4 py-10">
      {/* Form Section */}
      <div className="flex justify-center">
        <Card className="w-full max-w-md border border-default-200 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8">
          {/* Heading */}
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Create Account
            </h3>

            <p className="text-default-500 mt-2">
              Start your adventure with Wanderlust
            </p>
          </div>

          {/* Form */}
          <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
            {/* Name */}
            <TextField
              isRequired
              name="name"
              type="text"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Full Name</Label>

              <Input
                placeholder="Enter your name"
                className={{
                  inputWrapper:
                    "rounded-xl border border-default-200 shadow-sm",
                }}
              />

              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField
              isRequired
              name="image"
              type="url"
              validate={(value) => {
                if (!value.startsWith("http")) {
                  return "Please enter a valid URL";
                }
                return null;
              }}
            >
              <Label>Photo URL</Label>

              <Input
                placeholder="Enter your photo URL"
                className={{
                  inputWrapper:
                    "rounded-xl border border-default-200 shadow-sm",
                }}
              />

              <FieldError />
            </TextField>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>

              <Input
                placeholder="Enter your email"
                className={{
                  inputWrapper:
                    "rounded-xl border border-default-200 shadow-sm",
                }}
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              minLength={8}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label>Password</Label>

              <Input
                placeholder="Enter your password"
                className={{
                  inputWrapper:
                    "rounded-xl border border-default-200 shadow-sm",
                }}
              />

              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition"
            >
              Create Account
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-2 w-full">
              <Separator className="flex-1" />

              <p className="text-sm font-semibold text-default-500 whitespace-nowrap">
                OR
              </p>

              <Separator className="flex-1" />
            </div>

            {/* Google Button */}
            <Button
              onClick={handleGoogleLogin}
              variant="bordered"
              type="button"
              className="w-full py-6 rounded-xl border border-default-300 hover:bg-default-100 transition"
            >
              <FcGoogle size={22} />
              Sign Up With Google
            </Button>

            {/* Login Link */}
            <p className="text-center text-sm text-default-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-cyan-500 hover:text-blue-600 font-semibold transition"
              >
                Sign In
              </Link>
            </p>
          </Form>
        </Card>
      </div>
      {/* Image Section */}
      <div className="hidden lg:flex justify-center">
        <Image
          src={registerImg}
          alt="Register Illustration"
          className="rounded-3xl object-cover w-full max-w-xl shadow-2xl"
          priority
        />
      </div>
    </div>
  );
};

export default RegisterPage;
