import DashboadNav from "./Components/Shared/DashboadNav";

export default function Layout({ children }) {
  return (
    <>
      <div className="lg:flex w-screen lg:justify-center">
        <DashboadNav />
        <div className="lg:w-10/12 w-12/12">{children}</div>
      </div>
    </>
  );
}
