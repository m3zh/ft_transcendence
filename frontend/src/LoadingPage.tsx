import React from "react";
import ReactLoading from "react-loading";
  
export default function Loading() {
  return (
        <div className="container">
            <div className="row profile-header mt-5">
                <div className="profile-header-content row align-items-center">
                    <ReactLoading className="m-auto" type="bubbles" color="#FFFFFF"  height={200} width={100} />
                </div>
            </div>
        </div>
  );
}