import React from "react";
import "./assets/index.less";
import { useNotification } from "./notification";
import motion from "./motion";

export default () => {
  const [notice, contextHolder] = useNotification({ motion, closable: true });

  return (
    <>
      <div>
        <div>
          {/* Default */}
          <button
            onClick={() => {
              notice.open({
                content: `Testo o HTMLElement che va dentro il mio toast`
              });
            }}
          >
            Basic
          </button>

          {/* Not Close */}
          <button
            onClick={() => {
              notice.open({
                content: `${new Date().toISOString()}`,
                duration: null
              });
            }}
          >
            Not Auto Close
          </button>
        </div>

        <div>
          {/* No Closable */}
          <button
            onClick={() => {
              notice.open({
                content: `No Close! ${new Date().toISOString()}`,
                duration: null,
                closable: false,
                key: "No Close",
                onClose: () => {
                  console.log("Close!!!");
                }
              });
            }}
          >
            No Closable
          </button>

          {/* Force Close */}
          <button
            onClick={() => {
              notice.close("No Close");
            }}
          >
            Force Close No Closable
          </button>
        </div>
      </div>

      <div>
        {/* Destroy All */}
        <button
          onClick={() => {
            notice.destroy();
          }}
        >
          Destroy All
        </button>
      </div>

      {contextHolder}
    </>
  );
};
