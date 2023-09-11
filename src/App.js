import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import UploadGiftcard from "./components/giftcard/UploadGiftcard";
import AddGiftcard from "./components/giftcard/AddGiftcard";
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
  NotFound,
  CreateAds,
  BulkSms,
  Paybills,
  NewsList,
  FaqList,
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
import Facebook from "./components/ads campaign/Facebook";
import Twitter from "./components/ads campaign/Twitter";
import Instagram from "./components/ads campaign/Instagram";
import Bulk from "./components/sms/Bulk";
import Personalized from "./components/sms/Personalized";
import Single from "./components/sms/Single";
import Delivery from "./components/sms/Delivery";
import Data from "./components/paybills/Data";
import Airtime from "./components/paybills/Airtime";
import Bet from "./components/paybills/Bet";
import Electricity from "./components/paybills/Electricity";
import Cable from "./components/paybills/Cable";
import TicketingDetails from "./components/ticketing/TicketingDetails";

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
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/create-news" element={<News />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/faq" element={<FaqList />} />
          <Route path="/create-faq" element={<Faq />} />
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
          <Route path="/ads-campaign-facebook" element={<Facebook />} />
          <Route path="/ads-campaign-twitter" element={<Twitter />} />
          <Route path="/ads-campaign-instagram" element={<Instagram />} />
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

          {/* bulk sms */}
          <Route
            path="/bulk-sms"
            element={
              <BulkSms>
                <Bulk />
              </BulkSms>
            }
          />
          <Route
            path="/personalized"
            element={
              <BulkSms>
                <Personalized />
              </BulkSms>
            }
          />
          <Route
            path="/single"
            element={
              <BulkSms>
                <Single />
              </BulkSms>
            }
          />
          <Route
            path="/delivery-status"
            element={
              <BulkSms>
                <Delivery />
              </BulkSms>
            }
          />
          {/* bulk sms */}

          {/* paybills */}
          <Route
            path="/paybills"
            element={
              <Paybills>
                <Data />
              </Paybills>
            }
          />
          <Route
            path="/data"
            element={
              <Paybills>
                <Data />
              </Paybills>
            }
          />
          <Route
            path="/airtime"
            element={
              <Paybills>
                <Airtime />
              </Paybills>
            }
          />
          <Route
            path="/bet"
            element={
              <Paybills>
                <Bet />
              </Paybills>
            }
          />
          <Route
            path="/electricity"
            element={
              <Paybills>
                <Electricity />
              </Paybills>
            }
          />
          <Route
            path="/cable"
            element={
              <Paybills>
                <Cable />
              </Paybills>
            }
          />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
