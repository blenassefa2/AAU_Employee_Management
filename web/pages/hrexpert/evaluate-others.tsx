import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout/Layout";
interface EvaluationFormData {
  skill: number;
  timeManagement: number;
  resourceManagement: number;
  loyalty: number;
  punctuality: number;
  hardworking: number;
  problemSolving: number;
}

export default function PerformanceEvaluationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EvaluationFormData>();
  const [totalScore, setTotalScore] = useState<number>(0);

  const onSubmit = (data: EvaluationFormData) => {
    const scores = Object.values(data);
    const total = scores.reduce((acc, score) => acc + score, 0);
    setTotalScore(total);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Layout page="hrexpert">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">
            Performance Evaluation Form
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="skill" className="block font-medium">
                  Skill
                </label>
                <input
                  type="number"
                  id="skill"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  {...register("skill", { required: true, min: 0, max: 40 })}
                />
                {errors.skill && (
                  <span className="text-red-500">
                    This field is required and must be between 0 and 40.
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="timeManagement" className="block font-medium">
                  Time Management
                </label>
                <input
                  type="number"
                  id="timeManagement"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  {...register("timeManagement", {
                    required: true,
                    min: 0,
                    max: 40,
                  })}
                />
                {errors.timeManagement && (
                  <span className="text-red-500">
                    This field is required and must be between 0 and 40.
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="resourceManagement"
                  className="block font-medium"
                >
                  Resource Management
                </label>
                <input
                  type="number"
                  id="resourceManagement"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  {...register("resourceManagement", {
                    required: true,
                    min: 0,
                    max: 40,
                  })}
                />
                {errors.resourceManagement && (
                  <span className="text-red-500">
                    This field is required and must be between 0 and 40.
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="loyalty" className="block font-medium">
                  Loyalty
                </label>
                <input
                  type="number"
                  id="loyalty"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  {...register("loyalty", { required: true, min: 0, max: 40 })}
                />
                {errors.loyalty && (
                  <span className="text-red-500">
                    This field is required and must be between 0 and 40.
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="punctuality" className="block font-medium">
                  Punctuality
                </label>
                <input
                  type="number"
                  id="punctuality"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  {...register("punctuality", {
                    required: true,
                    min: 0,
                    max: 40,
                  })}
                />
                {errors.punctuality && (
                  <span className="text-red-500">
                    This field is required and must be between 0 and 40.
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="hardworking" className="block font-medium">
                  Hardworking
                </label>
                <input
                  type="number"
                  id="hardworking"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  {...register("hardworking", {
                    required: true,
                    min: 0,
                    max: 40,
                  })}
                />
                {errors.hardworking && (
                  <span className="text-red-500">
                    This field is required and must be between 0 and 40.
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full">
                <label htmlFor="problemSolving" className="block font-medium">
                  Problem Solving
                </label>
                <input
                  type="number"
                  id="problemSolving"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  {...register("problemSolving", {
                    required: true,
                    min: 0,
                    max: 40,
                  })}
                />
                {errors.problemSolving && (
                  <span className="text-red-500">
                    This field is required and must be between 0 and 40.
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
          {totalScore > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">
                Total Score: {totalScore}/240
              </h2>
              <p className="text-gray-500">
                Thank you for submitting your evaluation.
              </p>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}
