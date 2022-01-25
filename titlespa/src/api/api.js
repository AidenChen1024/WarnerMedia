import request from "../request";


export async function getDetail(TitleId) {
  return request(`/Title/GetDetail?id=${TitleId}`);
}

export async function getAllTitle() {
  return request(`/Title/AllTitle`);
}

export async function findTitle(name) {
  return request(`/Title/GetTitleByName?name=${name}`);
}


