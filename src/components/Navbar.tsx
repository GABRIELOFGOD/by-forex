import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between py-2 px-3 md:py-4 md:px-28 backdrop-blur-md z-40">
      <div className="my-auto">
        <div className="text-2xl md:text-4xl my-auto font-bold">
          <span className="text-primary">By</span><span className="text-white">Forex</span>
        </div>
      </div>
      <div className="gap-2 flex">
        <ConnectButton />
      </div>
    </div>
  )
}

export default Navbar;