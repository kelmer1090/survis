// src/data/tag_categories.js

export default [
  {
    id: "time",
    label: "Year",
    values: [
      { id: "2018", label: "2018" },
      { id: "2019", label: "2019" },
      { id: "2021", label: "2021" },
      { id: "2023", label: "2023" },
      { id: "2024", label: "2024" }
    ]
  },
  {
    id: "theme",
    label: "Theme",
    values: [
      { id: "regulatory_foundations",      label: "Regulatory Foundations" },
      { id: "transparency_explainability", label: "Transparency & Explainability" },
      { id: "bias_fairness_controls",      label: "Bias & Fairness Controls" },
      { id: "redress_accountability",      label: "Redress & Accountability" }
    ]
  },
  {
    id: "methodology",
    label: "Methodology",
    values: [
      { id: "qualitative",  label: "Qualitative" },
      { id: "quantitative", label: "Quantitative" }
    ]
  },
  {
    id: "evaluation",
    label: "Evaluation",
    values: [
      { id: "none",         label: "None" },
      { id: "case_study",   label: "Case Study" },
      { id: "user_study",   label: "User Study" },
      { id: "xai_framework",label: "XAI Framework" }
    ]
  }
];
