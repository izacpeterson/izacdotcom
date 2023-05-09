import * as fb from "../../lib/firebase.js";
export async function load({ params }) {
  let data = await fb.getProjects();

  return { projects: data };
}
