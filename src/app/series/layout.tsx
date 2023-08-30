import PortalSeriesList from "./_components/PortalSeriesList";

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <PortalSeriesList />
        </>
    );
};
