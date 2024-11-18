import React from "react";
import Skeleton from "@/components/Common/Skeleton";

const FallbackUI = () => {
  return (
    <React.Fragment>
      <div className="mb-5">
        <Skeleton width="400px" height="250px" />
      </div>

      <div className="mb-5">
        <Skeleton width="400px" height="180px" />
      </div>
      <div className="mb-5">
        <Skeleton width="400px" height="180px" />
      </div>
      <div className="mb-5">
        <Skeleton width="400px" height="60px" />
      </div>
      <div className="mb-5">
        <Skeleton width="400px" height="60px" />
      </div>
    </React.Fragment>
  );
};

export default FallbackUI;
