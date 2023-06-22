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
} from "./pages";
import SignIn from "./auth/SignIn";
import SignInOtp from "./auth/SignInOtp";
import Forgot from "./auth/Forgot";
import Layout2 from "./components/Layout2";
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

function App() {
  return (
    <BrowserRouter>
      <div className="text-white bg-primary">
        <Routes>
          <Route
            path="/"
            element={
              <Layout2>
                <SignIn />
              </Layout2>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Layout2>
                <SignIn />
              </Layout2>
            }
          />

          <Route
            path="/forgot-password"
            element={
              <Layout2>
                <Forgot />
              </Layout2>
            }
          />
          <Route
            path="/sign-in-otp/:resetToken"
            element={
              <Layout2>
                <SignInOtp />
              </Layout2>
            }
          />

          <Route
            path="/dashboard"
            element={
              <Sidebar>
                <Layout>
                  <Dashboard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/email1preview"
            element={
              <Sidebar>
                <Layout>
                  <Email1 />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/Admin-control"
            element={
              <Sidebar>
                <Layout>
                  <AdminControl />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/buy-gift-card"
            element={
              <Sidebar>
                <Layout>
                  <BuyGiftCard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/sell-gift-card"
            element={
              <Sidebar>
                <Layout>
                  <SellGiftCard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/p2p-tranx"
            element={
              <Sidebar>
                <Layout>
                  <P2P />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/virtual-card"
            element={
              <Sidebar>
                <Layout>
                  <VirtualCard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/crypto-tranx"
            element={
              <Sidebar>
                <Layout>
                  <CryptoTranx />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/users"
            element={
              <Sidebar>
                <Layout>
                  <Users />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/usersdetails"
            element={
              <Sidebar>
                <Layout>
                  <UserDetails />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/news"
            element={
              <Sidebar>
                <Layout>
                  <News />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/faq"
            element={
              <Sidebar>
                <Layout>
                  <Faq />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/usd-withdraw"
            element={
              <Sidebar>
                <Layout>
                  <UsdWithdraw />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ngn-withdraw"
            element={
              <Sidebar>
                <Layout>
                  <NgnWithdraw />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ghs-withdraw"
            element={
              <Sidebar>
                <Layout>
                  <GhsWithdraw />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/fx-rate"
            element={
              <Sidebar>
                <Layout>
                  <FxRate />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/crypto-rate"
            element={
              <Sidebar>
                <Layout>
                  <CryptoRate />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/giftcard/upload"
            element={
              <Sidebar>
                <Layout>
                  <UploadGiftcard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/giftcard/add"
            element={
              <Sidebar>
                <Layout>
                  <AddGiftcard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ngn-deposit"
            element={
              <Sidebar>
                <Layout>
                  <NgnDeposit />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/usd-deposit"
            element={
              <Sidebar>
                <Layout>
                  <UsdDeposit />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/push-notice"
            element={
              <Sidebar>
                <Layout>
                  <PushNotify />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/export-data"
            element={
              <Sidebar>
                <Layout>
                  <ExportData />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ads-campaign"
            element={
              <Sidebar>
                <Layout>
                  <AdsCampaign />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/send-email"
            element={
              <Sidebar>
                <Layout>
                  <SendEmail />
                </Layout>
              </Sidebar>
            }
          />

          <Route
            path="/telesales"
            element={
              <Sidebar>
                <Layout>
                  <TeleSales />
                </Layout>
              </Sidebar>
            }
          />

          <Route
            path="/kyc-1&2"
            element={
              <Sidebar>
                <Layout>
                  <Kyc1 />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/kyc-3"
            element={
              <Sidebar>
                <Layout>
                  <Kyc3 />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/kyc-4"
            element={
              <Sidebar>
                <Layout>
                  <Kyc4 />
                </Layout>
              </Sidebar>
            }
          />

          {/* ticketing section */}
          
          <Route
            path="/ticketing/all activies"
            element={
              <Sidebar>
                <Layout>
                  <Ticketing>
                    <Activies />
                  </Ticketing>
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ticketing/unassigned"
            element={
              <Sidebar>
                <Layout>
                  <Ticketing>
                    <Unassigned />
                  </Ticketing>
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ticketing/today's mail"
            element={
              <Sidebar>
                <Layout>
                  <Ticketing>
                    <TodayMail />
                  </Ticketing>
                </Layout>
              </Sidebar>
            }
          />

          <Route
            path="/ticketing/due ticket"
            element={
              <Sidebar>
                <Layout>
                  <Ticketing>
                    <DueTicket />
                  </Ticketing>
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ticketing/unresolved"
            element={
              <Sidebar>
                <Layout>
                  <Ticketing>
                    <Unresolved />
                  </Ticketing>
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ticketing/awaiting"
            element={
              <Sidebar>
                <Layout>
                  <Ticketing>
                    <Awaiting />
                  </Ticketing>
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ticketing/resolved"
            element={
              <Sidebar>
                <Layout>
                  <Ticketing>
                    <Resolved />
                  </Ticketing>
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/ticketing/spam"
            element={
              <Sidebar>
                <Layout>
                  <Ticketing>
                    <Spam />
                  </Ticketing>
                </Layout>
              </Sidebar>
            }
          />

          <Route
            path="/ticketing-details"
            element={
              <Sidebar>
                <Layout>
                  <TicketingDetails />
                </Layout>
              </Sidebar>
            }
          />
          {/* ticketing section */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
