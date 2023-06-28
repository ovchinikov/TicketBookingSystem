"use client"
import { Card, Input, Checkbox, Button } from "@material-tailwind/react";
import Link from "next/link";
import AuthLayout from "@components/auth_layout";
import "@styles/globals.css";

export default function LoginPage() {
  return (
    <AuthLayout>
      <Card color="transparent" shadow={true}>
        <div className="mb-6">
          <h4 className="lg:text-6xl text-4xl font-semibold text-gray-600">
            Login
          </h4>
          <p className="text-md text-gray-600 mt-2">
            Enter your details to login.
          </p>
        </div>

        <form className="flex flex-col gap-y-8 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-y-10">
            <Input
              type="email"
              label="Email"
              className="outline outline-1 outline-gray-400 rounded-sm"
            />
            <Input
              type="password"
              label="Password"
              className="outline outline-1 outline-gray-400 rounded-sm"
            />
          </div>
          <Checkbox
            className="outline outline-1 outline-gray-400 rounded-sm ml-2"
            label={
              <div className="flex items-center font-normal text-sm text-gray-400 ml-4">
                I agree to the
                <Link
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </Link>
              </div>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <div className="flex flex-col gap-y-2">
            <Button fullWidth>Login</Button>

            <div className="text-center text-sm text-gray-400">
              Dont have an account?{" "}
              <Link
                href="/auth/register"
                className="text-sm text-blue-500 transition-colors hover:text-blue-700"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
}
