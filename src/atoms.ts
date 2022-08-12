import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

// atom을 사용하므로 prop과 함수를 여기저기 사용하지 않아도 된다.
