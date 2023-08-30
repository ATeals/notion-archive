import PortalReviewList from "./_components/PortalReviewList";

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <PortalReviewList />
        </>
    );
};
