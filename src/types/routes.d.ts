export interface IRoute {
  label: string;
  path: string;
  component: JSX.Element;
  icon: JSX.Element;
  shownOnNavBar: boolean;
}
