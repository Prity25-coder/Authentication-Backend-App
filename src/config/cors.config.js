import { CustomError } from "../api/common/index.js";
import STATUS_CODE from "../constants/statusCode.js";

// get all whitelisted domains
const whitelist = [
  "http://localhost:4200",
  "http://localhost:3000",
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("origin", origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new CustomError("Not allowed by CORS", STATUS_CODE.NOT_ALLOWED));
    }
  },
};

export default corsOptions;