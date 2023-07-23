import { Header } from ".";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
