export default interface INavbar {
  className?: string;
  isAuthenticated: boolean;
  onLogin: (...args: any[]) => any;
  onLogout: (...args: any[]) => any;
}
