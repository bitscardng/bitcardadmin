import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import UploadGiftcard from "./components/giftcard/UploadGiftcard";
import AddGiftcard from "./components/giftcard/AddGiftcard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authlayout from "./layout/authlayout";
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
  SellGiftCard,
  BuyGiftCard,
  Kyc1,
  Kyc3,
  Kyc4,
  News,
  NgnDeposit,
  NgnWithdraw,
  P2P,
  PushNotify,
  SendEmail,
  UsdDeposit,
  UsdWithdraw,
  Users,
  UserDetails,
  VirtualCard,
  TeleSales,
  Ticketing,
  TicketingDetails,
  NotFound,
  CreateAds,
} from "./pages";
import SignIn from "./auth/SignIn";
import SignInOtp from "./auth/SignInOtp";
import Forgot from "./auth/Forgot";

import Email1 from "./components/Email1";
import {
  Activies,
  Awaiting,
  DueTicket,
  Resolved,
  Spam,
  TodayMail,
  Unassigned,
  Unresolved,
} from "./components/ticketing";
import { SendEmailTel } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<Forgot />} />

        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/sign-in-otp" element={<SignInOtp />} />
        <Route path="" element={<Authlayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/email1preview" element={<Email1 />} />
          <Route path="/Admin-control" element={<AdminControl />} />
          <Route path="/buy-gift-card" element={<BuyGiftCard />} />
          <Route path="/sell-gift-card" element={<SellGiftCard />} />
          <Route path="/p2p-tranx" element={<P2P />} />
          <Route path="/virtual-card" element={<VirtualCard />} />
          <Route path="/crypto-tranx" element={<CryptoTranx />} />
          <Route path="/users" element={<Users />} />
          <Route path="/usersdetails" element={<UserDetails />} />
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
          <Route path="/push-notice" element={<PushNotify />} />
          <Route path="/export-data" element={<ExportData />} />
          <Route path="/ads-campaign" element={<AdsCampaign />} />
          <Route path="/create-ads" element={<CreateAds />} />
          <Route path="/send-email" element={<SendEmail />} />

          <Route path="/telesales" element={<TeleSales />} />

          <Route path="/kyc-1&2" element={<Kyc1 />} />
          <Route path="/kyc-3" element={<Kyc3 />} />
          <Route path="/kyc-4" element={<Kyc4 />} />

          {/* ticketing section */}

          <Route
            path="/ticketing/all activies"
            element={
              <Ticketing>
                <Activies />
              </Ticketing>
            }
          />
          <Route
            path="/ticketing/unassigned"
            element={
              <Ticketing>
                <Unassigned />
              </Ticketing>
            }
          />
          <Route
            path="/ticketing/today's mail"
            element={
              <Ticketing>
                <TodayMail />
              </Ticketing>
            }
          />

          <Route
            path="/ticketing/due ticket"
            element={
              <Ticketing>
                <DueTicket />
              </Ticketing>
            }
          />
          <Route
            path="/ticketing/unresolved"
            element={
              <Ticketing>
                <Unresolved />
              </Ticketing>
            }
          />
          <Route
            path="/ticketing/awaiting"
            element={
              <Ticketing>
                <Awaiting />
              </Ticketing>
            }
          />
          <Route
            path="/ticketing/resolved"
            element={
              <Ticketing>
                <Resolved />
              </Ticketing>
            }
          />
          <Route
            path="/ticketing/spam"
            element={
              <Ticketing>
                <Spam />
              </Ticketing>
            }
          />
          <Route path="/ticketing-details" element={<TicketingDetails />} />
          <Route path="/telesales/sendemail" element={<SendEmailTel />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
