export interface Menu {
  title: string;
  icon: string;
  display: string;
  route: string;
  children?: Menu[];
}
