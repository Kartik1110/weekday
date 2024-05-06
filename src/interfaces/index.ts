export interface CompanyDetails {
  name: string;
  logo: string;
  maxSalary: number;
  minSalary: number | null;
  currency: string;
  location: string;
  role: string;
}

export interface JobDetails {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

export interface JdListResponse {
  jdList: JobDetails[];
  totalCount: number;
}
