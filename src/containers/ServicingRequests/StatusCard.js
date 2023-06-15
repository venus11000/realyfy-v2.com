import React, { useState } from "react";
import { toast } from "react-toastify";

import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import InlineLoader from "../../components/Loader/InlineLoader";

import { updateServiceRequest } from "../../api";

import { statuses } from "../../utils/constants/services";

const StatusCard = ({ row, onSuccessUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await updateServiceRequest(
        { requestId: row?._id },
        { status }
      );
      if (response?.status === 200) {
        toast.success("Updated SUccessfully!");
        setIsEditing(false);
        onSuccessUpdate();
      } else {
        toast.error("Unable to update!");
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Unable to update status:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center min-w-[170px]">
      {!isEditing ? (
        <div className="flex items-center gap-2">
          {row?.status}
          <button
            onClick={() => {
              setIsEditing(true);
              setStatus(row?.status);
            }}
          >
            <i class="far fa-edit"></i>
          </button>
        </div>
      ) : (
        <div>
          <Dropdown
            options={statuses}
            onChange={(event) => setStatus(event.target.value)}
            value={status}
          />
          {isLoading ? (
            <InlineLoader />
          ) : (
            <div className="flex items-center gap-2">
              <Button
                label={<i class="fa-solid fa-check"></i>}
                onClick={handleSubmit}
              />
              <Button
                label={<i class="fa-solid fa-x"></i>}
                variant="secondary"
                onClick={() => {
                  setIsEditing(false);
                  setStatus(null);
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StatusCard;
