export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "jobs",
      title: "Jobs",
      type: "array",
      of: [{ type: "jobExperience" }],
    },
  ],
};
