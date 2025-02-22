import { motion } from "framer-motion";

const SignupForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-richblack-800 p-8 rounded-xl shadow-xl max-w-md w-full mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Join BrightSteps
        </h2>
        <p className="text-richblack-200 mt-2">
          Start your journey in special education
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-richblack-100">First Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 bg-richblack-700 rounded-lg border border-richblack-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-richblack-100">Last Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 bg-richblack-700 rounded-lg border border-richblack-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Last name"
            />
          </div>
        </div>

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
            placeholder="Create a password"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-richblack-100">Confirm Password</label>
          <input
            type="password"
            className="w-full mt-2 p-3 bg-richblack-700 rounded-lg border border-richblack-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-richblack-200">
        Already have an account?{" "}
        <a href="/login" className="text-blue-400 hover:text-blue-300">
          Sign in
        </a>
      </p>
    </motion.div>
  );
};