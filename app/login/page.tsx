import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}


const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <div className="mb-4">
          <a href="/" className="text-sm text-blue-600 hover:underline">Back</a>
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">DW</h2>
        <h3 className="text-center text-2xl font-bold text-gray-900 mb-2">Welcome Back</h3>
        <p className="text-center text-sm text-gray-600 mb-4">Enter your email to sign in to your account</p>
        <form className="space-y-6">
          <input
            type="email"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Youremail@email.com"
          />
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>
        <div className="flex items-center justify-center space-x-2 my-4">
          <hr className="w-full" />
          <span className="text-sm text-gray-500">Or continue with</span>
          <hr className="w-full" />
        </div>
        <div>
          <button
            type="button"
            className="w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-blue-600 bg-blue-100 hover:bg-blue-200"
          >
            Google
          </button>
        </div>
        <div className="mt-6 text-center">
          <a href="/signup" className="text-sm text-blue-600 hover:underline">
          
          Don&apos;t have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
