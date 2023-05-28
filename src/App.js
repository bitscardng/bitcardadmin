import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import UploadGiftcard from "./components/giftcard/UploadGiftcard";
import AddGiftcard from "./components/giftcard/AddGiftcard";

import {
  AdminControl,
  AdsCampaign,
  CryptoRate,
  CryptoTranx,
  Dashboard,
  ExportData,
  Faq,
  FxRate,
  GhsWithdraw,
  GiftCard,
  GiftCardRate,
  Kyc1,
  Kyc3,
  Kyc4,
  News,
  NgnDeposit,
  NgnTransfer,
  NgnWithdraw,
  P2P,
  PushNotify,
  SendEmail,
  UsdDeposit,
  UsdTransfer,
  UsdWithdraw,
  Users,
  VirtualCard,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="text-white bg-primary">
        <Sidebar>
          <Layout>
            <div className="relative px-3">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Admin-control" element={<AdminControl />} />
                <Route path="/gift-card-tranx" element={<GiftCard />} />
                <Route path="/p2p-tranx" element={<P2P />} />
                <Route path="/virtual-card" element={<VirtualCard />} />
                <Route path="/crypto-tranx" element={<CryptoTranx />} />
                <Route path="/users" element={<Users />} />
                <Route path="/news" element={<News />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/usd-withdraw" element={<UsdWithdraw />} />
                <Route path="/ngn-withdraw" element={<NgnWithdraw />} />
                <Route path="/ghs-withdraw" element={<GhsWithdraw />} />
                <Route path="/fx-rate" element={<FxRate />} />
                <Route path="/crypto-rate" element={<CryptoRate />} />
                <Route path="/giftcard/upload" element={<UploadGiftcard />} />
                <Route path="/giftcard/add" element={<AddGiftcard />} />
                <Route path="/ngn-deposit" element={<NgnDeposit />} />
                <Route path="/usd-deposit" element={<UsdDeposit />} />
                <Route path="/ngn-transfer" element={<NgnTransfer />} />
                <Route path="/usd-transfer" element={<UsdTransfer />} />
                <Route path="/push-notice" element={<PushNotify />} />
                <Route path="/export-data" element={<ExportData />} />
                <Route path="/ads-campaign" element={<AdsCampaign />} />
                <Route path="/send-email" element={<SendEmail />} />
                <Route path="/kyc-1&2" element={<Kyc1 />} />
                <Route path="/kyc-3" element={<Kyc3 />} />
                <Route path="/kyc-4" element={<Kyc4 />} />
              </Routes>
            </div>
          </Layout>
        </Sidebar>
      </div>
    </BrowserRouter>
  );
}

export default App;
