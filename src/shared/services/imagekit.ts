import ImageKit from "imagekit-javascript";
import { API_URL } from "../constants/backend";

export const imagekit = new ImageKit({
  urlEndpoint: "https://ik.imagekit.io/z9fccliqp",
  publicKey: "public_ipDB1WrRO/JZRetNVHod6neqcI4=",
  authenticationEndpoint: `${API_URL}imagekit-auth`,
});
