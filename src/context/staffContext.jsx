import { useState, createContext, useEffect } from "react";

export const StaffContext = createContext({
  staffDetails: [],
  setStaffDetails: () => null,
  getStaffDetails: () => null,
  isLoading: false,
  setIsLoading: () => null,
  setLoadingState: () => null,
});

export const StaffProvider = ({ children }) => {
  const [staffDetails, setStaffDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getStaffDetails = (staff) => {
    setStaffDetails(staff);
  };

  const setLoadingState = (loadingState) => {
    setIsLoading(loadingState);
  };

  const value = { staffDetails, getStaffDetails, isLoading, setLoadingState };
  return (
    <StaffContext.Provider value={value}>{children}</StaffContext.Provider>
  );
};
