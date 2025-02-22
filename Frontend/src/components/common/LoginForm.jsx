import { motion } from "framer-motion";

const LoginForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-richblack-800 p-8 rounded-xl shadow-xl max-w-md w-full mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Welcome Back!
        </h2>
        <p className="text-richblack-200 mt-2">
          Continue your journey with BrightSteps
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="text-sm font-medium text-richblack-100">Email</label>
          <input
            type="email"
            className="w-full mt-2 p-3 bg-richblack-700 rounded-lg border border-richblack-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-richblack-100">Password</label>
          <input
            type="password"
            className="w-full mt-2 p-3 bg-richblack-700 rounded-lg border border-richblack-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-richblack-200">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Sign In
        </button>
      </form>

      <p className="mt-6 text-center text-richblack-200">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-400 hover:text-blue-300">
          Sign up
        </a>
      </p>
    </motion.div>
  );
};