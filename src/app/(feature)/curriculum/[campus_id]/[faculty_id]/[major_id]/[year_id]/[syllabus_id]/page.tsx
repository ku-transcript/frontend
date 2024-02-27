import React from "react";

type Props = {
  params: {
    campus_id: string;
    faculty_id: string;
    major_id: string;
    year_id: string;
    syllabus_id: string;
  };
};

const SyllabusPage = (props: Props) => {
  const {
    campus_id: campusId,
    faculty_id: facultyId,
    major_id: majorId,
    year_id: yearId,
    syllabus_id: syllabusId,
  } = props.params;
  return <div>SyllabusPage</div>;
};

export default SyllabusPage;
