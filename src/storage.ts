import { Memo } from "./types";

// ***************
// 変数一覧
// ***************

export const STORAGE_KEY = "memos";

// ***************
// 関数一覧
// ***************

export function readLocalStorage(key: string): Memo[] {
  // ローカルストレージからデータを取得する
  const data = localStorage.getItem(key);
  //dataにはnullかstring型でデータが送られてくる
  if (data === null) {
    return [];
  } else {
    return JSON.parse(data);
  }
}
// jsの型にして保存する
export function saveLocalStorage(key: string, memos: Memo[]) {
  // ローカルストレージにデータを保存する
  localStorage.setItem(key, JSON.stringify(memos));
}
