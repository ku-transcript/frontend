import React from "react";

type Props = {
  params: {
    campus_id: string;
    faculty_id: string;
    major_id: string;
    year_id: string;
  };
};

const YearSyllabusPage = (props: Props) => {
  const {
    campus_id: campusId,
    faculty_id: facultyId,
    major_id: majorId,
    year_id: yearId,
  } = props.params;
  return <div>YearSyllabusPage</div>;
};

export default YearSyllabusPage;
