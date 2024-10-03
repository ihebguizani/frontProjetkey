// application.model.ts
export interface Application {
  applicationId: number;
  type: string;
  status: string;
  createdAt: string;  // LocalDate in Java is best represented as a string in Angular
}
