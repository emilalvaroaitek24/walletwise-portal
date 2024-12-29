import { Anchor, ArrowRight, QrCode, Grid, User, Bell, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-lg mx-auto bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#6CBF41] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[120px] h-[45px] bg-[url('/assets/images/logo/logo.png')] bg-center bg-contain bg-no-repeat" />
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 cursor-pointer hover:opacity-80" onClick={() => window.location.href='notifications.html'} />
          <Headphones className="w-6 h-6 cursor-pointer hover:opacity-80" onClick={() => window.location.href='niyero.html'} />
        </div>
      </header>

      {/* Top Navigation */}
      <div className="flex gap-8 bg-white p-3 overflow-x-auto border-b">
        <Link to="/" className="text-[#6CBF41] font-semibold whitespace-nowrap border-b-2 border-[#6CBF41] pb-1">Wallet</Link>
        <Link to="/savings" className="text-gray-600 font-semibold whitespace-nowrap">Savings</Link>
        <Link to="/credit" className="text-gray-600 font-semibold whitespace-nowrap">Credit</Link>
        <Link to="/loans" className="text-gray-600 font-semibold whitespace-nowrap">Loans</Link>
        <Link to="/cards" className="text-gray-600 font-semibold whitespace-nowrap">Cards</Link>
      </div>

      <main className="flex-1 p-4">
        {/* Wallet Balance */}
        <Card className="mb-4">
          <CardContent className="p-6">
            <div className="text-4xl font-bold mb-1" id="balanceAmount">₱0</div>
            <div className="text-sm text-gray-500">Available balance</div>
            <div className="flex gap-4 mt-4">
              <Button className="flex-1 bg-[#6CBF41] hover:bg-[#5ba936]" onClick={() => window.location.href='cashin.html'}>
                Cash In
              </Button>
              <Button className="flex-1 bg-[#6CBF41] hover:bg-[#5ba936]" onClick={() => window.location.href='transfer.html'}>
                Transfer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Promo Block */}
        <Card className="mb-4">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">50% OFF</h3>
            <p className="text-sm text-gray-500">Summer special deal. Get discount for every transaction</p>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          {[
            { icon: "⛵", label: "Maritime", href: "maritime.html" },
            { icon: "💼", label: "Finance", href: "finance.html" },
            { icon: "🎓", label: "Academy", href: "academy.html" },
            { icon: "🎞", label: "Media", href: "media.html" },
            { icon: "🚘", label: "Vehicle", href: "vehicle.html" },
            { icon: "🎮", label: "Games", href: "games.html" },
            { icon: "🎟", label: "Lottery", href: "lottery.html" },
            { icon: "➕", label: "More", href: "more.html" }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center cursor-pointer"
              onClick={() => window.location.href = service.href}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-2 text-xl">
                {service.icon}
              </div>
              <span className="text-xs text-gray-700">{service.label}</span>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Recent Transaction</h3>
            <span 
              className="text-[#6CBF41] text-sm cursor-pointer"
              onClick={() => window.location.href='transactions.html'}
            >
              See All
            </span>
          </div>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between text-sm">
                <span>No transactions yet</span>
                <span className="font-bold">---</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white border-t flex justify-around items-center p-2">
        <Link to="/" className="flex flex-col items-center text-[#6CBF41]">
          <Anchor className="w-6 h-6" />
          <span className="text-xs mt-1">Panyero</span>
        </Link>
        <Link to="/wallet" className="flex flex-col items-center text-gray-600">
          <ArrowRight className="w-6 h-6" />
          <span className="text-xs mt-1">Send Money</span>
        </Link>
        <Link to="/scan" className="flex flex-col items-center text-gray-600">
          <QrCode className="w-8 h-8" />
          <span className="text-xs mt-1">Scan</span>
        </Link>
        <Link to="/services" className="flex flex-col items-center text-gray-600">
          <Grid className="w-6 h-6" />
          <span className="text-xs mt-1">Services</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-gray-600">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Index;