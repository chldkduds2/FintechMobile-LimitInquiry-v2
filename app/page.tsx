"use client";

import React, { Suspense } from "react";
import PageScrapingFallbackUI from "@/components/Common/Skeleton/pageScrapingFallbackUI";
import PageScraping from "@/components/pageScraping";
import useInitializeAuthToken from "@/hooks/Common/InitializeAuthToken/UseInitializeAuthToken";

const MainPage = () => {
  useInitializeAuthToken();
  return (
    <Suspense fallback={<PageScrapingFallbackUI />}>
      <PageScraping />
    </Suspense>
  );
};

export default MainPage;
