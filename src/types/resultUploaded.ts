export interface TranscriptData {
  date_of_admission: string;
  enrolled_courses: EnrolledCourse[];
  is_graduate: boolean;
  student_cum_gpa: number;
  student_en_name: string;
  student_en_title: string;
  student_faculty: string;
  student_id: string;
  student_major: string;
  student_th_name: string;
  student_th_title: string;
  total_credit_per_category: TotalCreditPerCategory;
}

export interface EnrolledCourse {
  course_credit: number;
  course_id: string;
  course_name: string;
  student_grade: string;
}

export interface TotalCreditPerCategory {
  คณะประมง: number;
  คณะมนุษยศาสตร์: number;
  คณะวิทยาศาสตร์: number;
  คณะศึกษาศาสตร์: number;
  คณะสังคมศาสตร์: number;
  คณะเศรษฐศาสตร์: number;
  พลเมืองไทยและพลเมืองโลก: number;
  ภาษากับการสื่อสาร: number;
  วิชาเฉพาะบังคับ: number;
  วิชาเฉพาะเลือก: number;
  วิชาแกน: number;
  วิทยาลัยบูรณาการศาสตร์: number;
  ศาสตร์แห่งผู้ประกอบการ: number;
  สุนทรียศาสตร์: number;
  อยู่ดีมีสุข: number;
  "โครงการบูรณาการ วิทยาเขตกำแพงแสน": number;
}

export type TranscriptDataStateType = {
  transcriptData?: TranscriptData | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
};
