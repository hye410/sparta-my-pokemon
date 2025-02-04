import Swal from "sweetalert2";
export const useAlert = (type, content, buttonText) => {
  let alert = {};
  switch (type) {
    case "error":
      alert = {
        type: "error",
        title: "Error!",
        content: content || "에러가 발생했습니다.",
        buttonText: buttonText || "확인",
      };
      break;
    case "success":
      alert = {
        type: "success",
        title: "Success!",
        content: content || "완료되었습니다.",
        buttonText: buttonText || "확인",
      };
      break;
    case "info":
      alert = {
        type: "info",
        title: "Info!",
        content: content || "다시 확인해 주세요.",
        buttonText: buttonText || "확인",
      };
      break;
    case "warning":
      alert = {
        type: "question",
        title: "Warning!",
        content: content || "다시 확인해 주세요.",
        buttonText: buttonText || "확인",
      };
      break;
    default:
      alert = {
        type: "success",
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
    });
};
