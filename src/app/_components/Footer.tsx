import { RevaildatePost, RevaildateSeries } from "@/components/RevalidateBtn";
import DarkModeBtn from "./DarkModeBtn";

export default () => {
    return (
        <footer className="p-10 min-h-[200px] flex flex-col justify-center items-center [&>*]:m-2">
            <div>&copy; Ateals</div>
            <div className="md:hidden">
                <DarkModeBtn />
            </div>

            <div
                id="Revaildate"
                className="flex [&>*]:mx-2"
            ></div>

            <div className="text-[gray]">Powered by vercel</div>
        </footer>
    );
};
