import React from "react";

const conditionSummaries = {
  refraction: {
    title: "Glasses / Contacts",
    content:
      "We updated your glasses prescription to improve your distance and near clarity, reducing eye strain and blur. Let us know if you'd like help choosing lenses or frames that match your lifestyle."
  },
  dryeye: {
    title: "Dry Eye Syndrome",
    content:
      "You have mild dry eye. We recommend using preservative-free artificial tears 3–4x daily, warm compresses like the Bruder mask once a day, staying hydrated, and wearing sunglasses outdoors to reduce irritation."
  },
  maculardegeneration: {
    title: "Macular Degeneration Risk",
    content:
      "You have a family history of age-related macular degeneration (AMD). While no signs are present now, we recommend taking MacuHealth supplements, wearing quality UV-blocking sunglasses, and having regular exams to monitor changes."
  },
  glaucoma: null,
  diabetic: null,
  floaters: null,
  cataracts: {
    title: "Cataracts (Monitoring)",
    content:
      "Early cataracts are present. No treatment is needed now, but we’ll continue to monitor their effect on your vision. Using UV-blocking sunglasses may help slow progression."
  }
};

function PersonalizedTabs({ patientFindings }) {
  const [activeTab, setActiveTab] = React.useState(null);

  const tabMap = Object.keys(patientFindings).reduce((acc, key) => {
    if (conditionSummaries[key]) acc[key] = conditionSummaries[key].title;
    return acc;
  }, {});

  const links = {
    maculardegeneration: (
      <a
        href="https://myvisionclinic.com/nutritional-support"
        className="inline-block mt-2 text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
      >
        Learn about MacuHealth Supplements
      </a>
    ),
    dryeye: (
      <a
        href="https://myvisionclinic.com/dry-eye"
        className="inline-block mt-2 text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
      >
        Dry Eye Relief Options
      </a>
    ),
    cataracts: (
      <a
        href="https://myvisionclinic.com/cataracts"
        className="inline-block mt-2 text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
      >
        Cataract Monitoring & Info
      </a>
    )
  };

  const tabsToShow = Object.keys(tabMap);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Personalized Eye Health Summary</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {tabsToShow.map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={\`px-3 py-1 rounded-full border text-sm \${activeTab === key ? "bg-blue-600 text-white" : "bg-white text-blue-600 border-blue-600"}\`}
          >
            {tabMap[key]}
          </button>
        ))}
      </div>

      {activeTab && (
        <div className="border p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-2">
            {conditionSummaries[activeTab].title}
          </h2>
          <p>{conditionSummaries[activeTab].content}</p>
          {links[activeTab] && <div className="mt-4">{links[activeTab]}</div>}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const testFindings = {
    refraction: true,
    dryeye: true,
    maculardegeneration: true,
    cataracts: true
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <PersonalizedTabs patientFindings={testFindings} />
    </div>
  );
}