export const calTotalCredit = (totalCredit: number) => {
  console.log("totalCredit", totalCredit);
  const percent = (totalCredit / 128) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
};

export const calPercentLiveHappily = (liveHappily: number) => {
  console.log("liveHappily", liveHappily);
  const percent = (liveHappily / 3) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
};

export const calPercentScienceOfEntrepreneurship = (
  scienceOfEntrepreneurship: number
) => {
  const percent = (scienceOfEntrepreneurship / 3) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
};

export const calPercentLanguageAndCommunication = (
  languageAndCommunication: number
) => {
  const percent = (languageAndCommunication / 13) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
};

export const calThaiCitizensAndWorldCitizens = (
  thaiCitizensAndWorldCitizens: number
) => {
  const percent = (thaiCitizensAndWorldCitizens / 3) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
}

export const calAesthetics = (aesthetics: number) => {
  const percent = (aesthetics / 3) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
};

export const calFacultyOfScience = (facultyOfScience: number) => {
  const percent = (facultyOfScience / 5) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
};

export const calCoreCourse = (coreCourse: number) => {
  const percent = (coreCourse / 16) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
}

export const calMandatoryCourse = (mandatoryCourse: number) => {
  const percent = (mandatoryCourse / 55) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
}

export const calElectiveCourse = (electiveCourse: number) => {
  const percent = (electiveCourse / 21) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
}

export const numberFreeElective = (
  liveHappily: number,
  scienceOfEntrepreneurship: number,
  languageAndCommunication: number,
  thaiCitizensAndWorldCitizens: number,
  aesthetics: number,
  facultyOfScience: number,
) => {
  const overflow =
    liveHappily +
    scienceOfEntrepreneurship +
    languageAndCommunication +
    thaiCitizensAndWorldCitizens +
    aesthetics +
    facultyOfScience -
    30;

  return overflow;
};

export const calFreeElective = (
  liveHappily: number,
  scienceOfEntrepreneurship: number,
  languageAndCommunication: number,
  thaiCitizensAndWorldCitizens: number,
  aesthetics: number,
  facultyOfScience: number
) => {
  const overflow =
    liveHappily +
    scienceOfEntrepreneurship +
    languageAndCommunication +
    thaiCitizensAndWorldCitizens +
    aesthetics +
    facultyOfScience -
    30;
  const percent = (overflow / 6) * 100;
  if (percent >= 100) {
    return 100;
  } else {
    return Math.round(percent);
  }
};