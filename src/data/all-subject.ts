import kuAllGe from "./jsons/ku_all_ge.json";
import kuCS60 from "./jsons/ku_cs60.json";

type Subject = {
  value: string;
  label: string;
};

const getSubJectLiveHappily = () => {
  const subJectLiveHappily = kuAllGe
    .filter((course: any) => course.course_category === "อยู่ดีมีสุข")
    .map((course: any) => ({
      value: course.course_id,
      label: course.course_id + " " + course.course_name,
    }));

  return subJectLiveHappily;
};

export const subJectLiveHappily: Subject[] =
  getSubJectLiveHappily();

const getSubJectScienceOfEntrepreneurship = () => {
  const subJectScienceOfEntrepreneurship = kuAllGe
    .filter(
      (course: any) => course.course_category === "ศาสตร์แห่งผู้ประกอบการ"
    )
    .map((course: any) => ({
      value: course.course_id,
      label: course.course_id + " " + course.course_name,
    }));

  return subJectScienceOfEntrepreneurship;
}

export const subJectScienceOfEntrepreneurship: Subject[] =
  getSubJectScienceOfEntrepreneurship();

const getSubJectLanguageAndCommunication = () => {
  const subJectLanguageAndCommunication = kuAllGe
    .filter((course: any) => course.course_category === "ภาษากับการสื่อสาร")
    .map((course: any) => ({
      value: course.course_id,
      label: course.course_id + " " + course.course_name,
    }));

  return subJectLanguageAndCommunication;
}

export const subJectLanguageAndCommunication: Subject[] =
  getSubJectLanguageAndCommunication();

const getSubJectThaiCitizensAndWorldCitizens = () => {
  const subJectThaiCitizensAndWorldCitizens = kuAllGe
    .filter((course: any) => course.course_category === "พลเมืองไทยและพลเมืองโลก")
    .map((course: any) => ({
      value: course.course_id,
      label: course.course_id + " " + course.course_name,
    }));

  return subJectThaiCitizensAndWorldCitizens;
}

export const subJectThaiCitizensAndWorldCitizens: Subject[] =
  getSubJectThaiCitizensAndWorldCitizens();

const getSubJectAesthetics = () => {
  const subJectAesthetics = kuAllGe
    .filter((course: any) => course.course_category === "สุนทรียศาสตร์")
    .map((course: any) => ({
      value: course.course_id,
      label: course.course_id + " " + course.course_name,
    }));

  return subJectAesthetics;
}

export const subJectAesthetics: Subject[] =
  getSubJectAesthetics();

export const getSubJectFacultyOfScience = () => {
  const subJectFacultyOfScience = kuAllGe
    .filter((course: any) => course.course_faculty === "คณะวิทยาศาสตร์")
    .map((course: any) => ({
      value: course.course_id,
      label: course.course_id + " " + course.course_name,
    }));

  return subJectFacultyOfScience;
}

export const subJectFacultyOfScience: Subject[] =
  getSubJectFacultyOfScience();

export const getAllSubject = () => {
  const allSubject = kuAllGe.map((course: any) => ({
    value: course.course_id,
    label: course.course_id + " " + course.course_name,
  }));

  return allSubject;
}

export const allSubject: Subject[] = getAllSubject();

export const getSubJectCS60Elective = () => {
  const subJectCS60Elective = kuCS60
    .filter((course: any) => course.course_category === "วิชาเฉพาะเลือก")
    .map((course: any) => ({
      value: course.course_id,
      label: course.course_id + " " + course.course_name,
    }));

  return subJectCS60Elective;
}

export const subJectCS60Elective: Subject[] =
  getSubJectCS60Elective();