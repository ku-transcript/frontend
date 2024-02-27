import React from "react";

type Props = {
  params: {
    campus_id: string;
  };
};

const CampusFacultyPage = (props: Props) => {
  const { campus_id: campusId } = props.params;

  return <div>{campusId}</div>;
};

export default CampusFacultyPage;
