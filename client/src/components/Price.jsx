const plans = [
  {
    name: "Chihuahua",
    price: "Free",
    features: [
      "5 Matches Per Day",
      "10 Messages Per Day",
      "Unlimited App Usage"
    ],
    highlight: true
  },
  {
    name: "Labrador",
    price: "$49 / mo",
    features: [
      "Unlimited Matches",
      "Unlimited Messages",
      "Unlimited App Usage"
    ],
    highlight: true
  },
  {
    name: "Mastiff",
    price: "$99 / mo",
    features: [
      "Priority Listing",
      "Unlimited Matches",
      "Unlimited Messages",
      "Unlimited App Usage"
    ],
    highlight: true
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-10 px-5 text-center">
      <h1 className="text-4xl font-bold mb-2">A Plan for Every Dog's Needs</h1>
      <p className="text-gray-500 mb-10">
        Simple and affordable price plans for you and your dog.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border rounded-2xl shadow-md p-6 flex flex-col items-center"
          >
            <div className="bg-gray-100 w-full text-center py-2 rounded-t-xl font-bold text-xl">
              {plan.name}
            </div>
            <div className="text-4xl font-extrabold mt-4 mb-6">{plan.price}</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className={`mt-auto px-6 py-2 rounded-xl font-semibold text-white w-full ${
                plan.highlight ? "bg-gray-800" : "bg-white text-black border"
              }`}
            >
              Sign Up
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
