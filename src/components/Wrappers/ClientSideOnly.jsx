import dynamic from "next/dynamic";

const ClientOnly = ({ children }) => {
  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(ClientOnly), { ssr: false });
