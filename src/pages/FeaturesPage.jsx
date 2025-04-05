import React, { useState } from "react";
import bgImage from "../assets/bg_image.png";
import PlanCard from "../components/PlanCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const FeaturesPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const basePlans = [
    {
      title: "Standard",
      description: "Essential features for individuals getting started",
      monthlyPrice: 99,
      features: [
        "Basic access to all features",
        "Up to 5 team members",
        "10GB storage",
        "Email support",
        "Basic analytics",
      ],
      cta: "Choose Plan",
    },
    {
      title: "Premium",
      description: "Advanced features for growing teams",
      monthlyPrice: 299,
      features: [
        "All Standard features",
        "Up to 20 team members",
        "50GB storage",
        "Priority support",
        "Advanced analytics",
        "API access",
      ],
      cta: "Choose Plan",
      recommended: true,
    },
    {
      title: "Enterprise",
      description: "Custom solutions for large organizations",
      isCustom: true,
      features: [
        "All Premium features",
        "Unlimited team members",
        "1TB+ storage",
        "24/7 dedicated support",
        "Custom integrations",
        "Personal account manager",
      ],
      cta: "Contact Us",
    },
  ];

  const getPlans = () => {
    return basePlans.map((plan) => {
      if (plan.isCustom) {
        return {
          ...plan,
          price: "Custom",
          period: "",
          displayPrice: "Custom",
        };
      }

      const yearlyPrice = Math.round(plan.monthlyPrice * 12 * 0.6); // 60% off yearly
      return {
        ...plan,
        price: isYearly ? yearlyPrice : plan.monthlyPrice,
        period: isYearly ? "per Year" : "per Month",
        displayPrice: isYearly ? yearlyPrice : plan.monthlyPrice,
      };
    });
  };

  return (
    <div className="relative lg:h-screen flex  flex-col overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-black/50" />

      {/* Main Content  */}
      <div className="flex-1 flex  flex-col sm:gap-4 justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Flexible <span className="text-bright-orange">Plans</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Choose a plan that works best for you & your team
          </p>

          {/* Toggle monthly or yearly */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-l-full font-medium text-sm ${
                !isYearly
                  ? "bg-bright-orange px-6 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-r-full font-medium text-sm relative ${
                isYearly
                  ? "bg-bright-orange px-8 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-orange-700 text-white text-xs px-1.5 py-0.5 rounded-full">
                Save 60%
              </span>
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-4 lg:gap-8 max-w-5xl mx-auto px-4">
          {getPlans().map((plan, index) => (
            <div key={index} >
              <PlanCard
                title={plan.title}
                description={plan.description}
                price={plan.displayPrice}
                period={plan.period}
                features={plan.features}
                cta={plan.cta}
                recommended={plan.recommended}
                compact={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer  />
    </div>
  );
};

export default FeaturesPage;