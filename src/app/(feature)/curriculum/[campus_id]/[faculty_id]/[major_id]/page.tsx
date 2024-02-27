import React from "react";

type Props = {
  params: {
    campus_id: string;
    faculty_id: string;
    major_id: string;
  };
};

const MajorYearPage = (props: Props) => {
  const {
    campus_id: campusId,
    faculty_id: facultyId,
    major_id: majorId,
  } = props.params;
  return <div>MajorYearPage</div>;
};

export default MajorYearPage;
