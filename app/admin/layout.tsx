import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Relief Hub: Admin Panel",
    description: "Admin Panel for Relief Hub App",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <main>{children}</main>;
};

export default Layout;
