import { Header } from "../components";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
