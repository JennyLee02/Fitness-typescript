export enum SelectedPage {
    Home="home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    //Question mark allows it to be optional 
    description?: string;
    image: string;
  }