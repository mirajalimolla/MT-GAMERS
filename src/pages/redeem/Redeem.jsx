import RedeemCard from "./RedeemCard";
import SidebarMenu from "../components/SidebarMenu";

function Redeem() {
    const redeemInfo = [
        {
            massage: "This is the example redeem for testing",
            postDate: "01/07/2026",
            expireDate: "01/12/2026"
        }
    ]

    return (
        <section style={{ background: "url('../../src/assets/details.jpg') no-repeat", backgroundSize: "cover" }} className="h-screen overflow-y-scroll">
            <SidebarMenu />
            <h1 className="bg-black text-white font-bold text-center sm:text-4xl lg:text-5xl py-2 fixed top-0 w-screen">REDEEM PAGE</h1>
            <div className="grid gap-3 sm:w-[80%] w-[90%] mt-16 py-3 m-auto">
                {
                    redeemInfo.map((elem, id) => {
                        return <RedeemCard key={id} redeemHeading={elem.massage} postDate={elem.postDate} expireDate={elem.expireDate} />
                    })
                }
            </div>
        </section>
    );
}

export default Redeem;