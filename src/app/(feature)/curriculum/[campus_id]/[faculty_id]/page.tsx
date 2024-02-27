import React from "react";

type Props = {
  params: {
    campus_id: string;
    faculty_id: string;
  };
};

const FacultyMajorPage = (props: Props) => {
  const { campus_id: campusId, faculty_id: facultyId } = props.params;
  return <div>FacultyMajorPage</div>;
};

export default FacultyMajorPage;
