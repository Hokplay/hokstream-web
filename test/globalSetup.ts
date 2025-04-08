export default function setup() {
  setSystemTimezone('Asia/Taipei');
}

/**
 * 設定系統時區，避免跑測試的環境的時區不同
 * ref: https://github.com/vitest-dev/vitest/issues/1575#issuecomment-1439286286
 */
function setSystemTimezone(timezone: string) {
  process.env.TZ = timezone;
}
