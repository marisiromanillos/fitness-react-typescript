export enum SelectedP {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  FreeDayPass = "freedaypass",
}
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description: string;
  image: string;
}