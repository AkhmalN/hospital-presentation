import { TrendingUp, Clock, Heart, Workflow } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="h-6 w-6 text-indigo-500" />,
    title: "Cost Efficiency",
    description:
      "Reduce operational costs by up to 30% through automated workflows and optimized resource allocation.",
    metric: "30%",
    metricLabel: "Cost Reduction",
  },
  {
    icon: <Clock className="h-6 w-6 text-indigo-500" />,
    title: "Time Savings",
    description:
      "Save up to 15 hours per week per staff member on administrative tasks.",
    metric: "15hrs",
    metricLabel: "Weekly Time Saved",
  },
  {
    icon: <Heart className="h-6 w-6 text-indigo-500" />,
    title: "Patient Care",
    description:
      "Improve patient satisfaction scores by 40% with better service delivery.",
    metric: "40%",
    metricLabel: "Satisfaction Increase",
  },
  {
    icon: <Workflow className="h-6 w-6 text-indigo-500" />,
    title: "Workflow Optimization",
    description:
      "Streamline processes resulting in 50% faster patient processing times.",
    metric: "50%",
    metricLabel: "Faster Processing",
  },
];

export const Benefits = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Measurable Benefits
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real results that impact your bottom line
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <div className="rounded-lg bg-blue-50 p-3 ring-4 ring-blue-50">
                    {benefit.icon}
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {benefit.description}
                  </p>
                </div>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-blue-600">
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-gray-500">
                    {benefit.metricLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
