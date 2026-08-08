import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import "./index.css";

const App = lazy(() => import("./App"));
const DataExplorerPage = lazy(() => import("./pages/DataExplorerPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const RegionsPage = lazy(() => import("./pages/RegionsPage"));
const PopulationByRegionPage = lazy(
  () => import("./pages/visualizations/PopulationByRegionPage")
);
const YolandaHousingPage = lazy(() => import("./pages/visualizations/YolandaHousingPage"));
const ElectoralMapPage = lazy(() => import("./pages/visualizations/ElectoralMapPage"));
const ConsumerBusinessConfidencePage = lazy(
  () => import("./pages/visualizations/ConsumerBusinessConfidencePage")
);
const OverallInflationPage = lazy(() => import("./pages/visualizations/OverallInflationPage"));
const RiceFoodPricesPage = lazy(() => import("./pages/visualizations/RiceFoodPricesPage"));
const FoodInflationPage = lazy(() => import("./pages/visualizations/FoodInflationPage"));
const PresidentialApprovalPage = lazy(
  () => import("./pages/visualizations/PresidentialApprovalPage")
);
const VpApprovalPage = lazy(() => import("./pages/visualizations/VpApprovalPage"));
const PresidentialSatisfactionPage = lazy(
  () => import("./pages/visualizations/PresidentialSatisfactionPage")
);
const VpSatisfactionPage = lazy(() => import("./pages/visualizations/VpSatisfactionPage"));
const TourismGrowthPage = lazy(() => import("./pages/visualizations/TourismGrowthPage"));
const TourismNationalityPage = lazy(
  () => import("./pages/visualizations/TourismNationalityPage")
);
const FdiPage = lazy(() => import("./pages/visualizations/FdiPage"));
const JuvenileCrimePage = lazy(() => import("./pages/visualizations/JuvenileCrimePage"));
const PhilHealthSubsidyPage = lazy(
  () => import("./pages/visualizations/PhilHealthSubsidyPage")
);
const DPWHBudgetPage = lazy(() => import("./pages/visualizations/DPWHBudgetPage"));
const NationalDebtPage = lazy(() => import("./pages/visualizations/NationalDebtPage"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/explore/:category" element={<DataExplorerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/regions" element={<RegionsPage />} />
          <Route path="/visualization/yolanda-housing" element={<YolandaHousingPage />} />
          <Route path="/visualization/electoral-map" element={<ElectoralMapPage />} />
          <Route
            path="/visualization/population-by-region"
            element={<PopulationByRegionPage />}
          />
          <Route
            path="/visualization/consumer-business-confidence"
            element={<ConsumerBusinessConfidencePage />}
          />
          <Route path="/visualization/overall-inflation" element={<OverallInflationPage />} />
          <Route path="/visualization/rice-food-prices" element={<RiceFoodPricesPage />} />
          <Route path="/visualization/food-inflation" element={<FoodInflationPage />} />
          <Route
            path="/visualization/presidential-approval-ratings"
            element={<PresidentialApprovalPage />}
          />
          <Route path="/visualization/vp-approval-ratings" element={<VpApprovalPage />} />
          <Route
            path="/visualization/presidential-net-satisfaction"
            element={<PresidentialSatisfactionPage />}
          />
          <Route path="/visualization/vp-net-satisfaction" element={<VpSatisfactionPage />} />
          <Route path="/visualization/tourism-growth" element={<TourismGrowthPage />} />
          <Route
            path="/visualization/tourism-nationality"
            element={<TourismNationalityPage />}
          />
          <Route path="/visualization/fdi-by-administration" element={<FdiPage />} />
          <Route path="/visualization/juvenile-crime" element={<JuvenileCrimePage />} />
          <Route path="/visualization/philhealth-subsidy" element={<PhilHealthSubsidyPage />} />
          <Route path="/visualization/dpwh-budget" element={<DPWHBudgetPage />} />
          <Route path="/visualization/national-debt" element={<NationalDebtPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
