// 팝업 타입
export const ALERT_TYPE = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
});

// 유효성 검사 결과
export const VALIDATION_RESULT = Object.freeze({
  PASS: "pass", // 추가 가능
  OVER_MAXIMUM: "overMaximum", // 추가 가능 개수 초과
  DUPLICATION: "duplication", // 중복된 포켓몬
});

export const ACTION_TYPE = Object.freeze({
  ADD: "add",
  DELETE: "delete",
});
