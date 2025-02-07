import Swal from "sweetalert2";
import { ALERT_TYPE } from "../constant/constant";
const { SUCCESS, WARNING, ERROR } = ALERT_TYPE;
export const createAlert = (alertContent) => {
  const { type, content, buttonText } = alertContent;

  let alert = {};

  switch (type) {
    case ERROR:
      alert = {
        type: ERROR,
        title: "Error!",
        content: content || "에러가 발생했습니다.",
        buttonText: buttonText || "확인",
        buttonColor: "rgb(238, 76, 76)",
      };
      break;
    case SUCCESS:
      alert = {
        type: SUCCESS,
        title: "Success!",
        content: content || "완료되었습니다.",
        buttonText: buttonText || "확인",
        buttonColor: "rgb(133, 215, 92)",
      };
      break;
    case WARNING:
      alert = {
        type: WARNING,
        title: "Warning!",
        content: content || "다시 확인해 주세요.",
        buttonText: buttonText || "확인",
        showCancelButton: true,
        buttonColor: "rgb(245, 170, 104)",
      };
      break;
    default:
      alert = {
        type: SUCCESS,
        title: "Success!",
        content: content || "완료되었습니다.",
        buttonText: buttonText || "확인",
      };
  }

  return () =>
    Swal.fire({
      title: alert.title,
      text: alert.content,
      icon: alert.type,
      confirmButtonText: alert.buttonText,
      confirmButtonColor: alert.buttonColor,
      showCancelButton: alert.showCancelButton ?? null,
      cancelButtonText: "취소",
    });
};
