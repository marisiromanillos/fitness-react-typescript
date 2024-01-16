export enum SelectedP {
  Home = "home",
  Membership = "benefits",
  OurClasses = "ourclasses",
  FreeDayPass = "freedaypass",
}
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}