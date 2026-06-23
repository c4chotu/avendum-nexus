globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/assets/about-team-BQ6nBTrE.jpg": {
    "type": "image/jpeg",
    "etag": '"21308-ZkOFlMhyYsH+xM+wNhkoig4viN0"',
    "mtime": "2026-06-23T10:48:48.764Z",
    "size": 135944,
    "path": "../public/assets/about-team-BQ6nBTrE.jpg"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": '"1965-gf6t7WmxQwI5HFFcdteQ5AOy7s4"',
    "mtime": "2026-06-11T13:07:04.703Z",
    "size": 6501,
    "path": "../public/favicon.png"
  },
  "/assets/arrow-left-CtpB24UZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-xxxnDpwNJQ2vUN3A1RmtuEw2NdQ"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 166,
    "path": "../public/assets/arrow-left-CtpB24UZ.js"
  },
  "/assets/arrow-right-C6xMprZ6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-UQeKC7s4S7jviwIhRBe4fXQYtmg"',
    "mtime": "2026-06-23T10:48:48.802Z",
    "size": 166,
    "path": "../public/assets/arrow-right-C6xMprZ6.js"
  },
  "/assets/careers.apply-BRZmO-iC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c18-y6xJ4oKQJJ9i7Er9jpXhUHjRJlI"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 7192,
    "path": "../public/assets/careers.apply-BRZmO-iC.js"
  },
  "/assets/activity-B3NKMG2j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"eb-NdJQKPt39rK8AjiDKUkfEN2RG6U"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 235,
    "path": "../public/assets/activity-B3NKMG2j.js"
  },
  "/assets/chart-column-CyUs_zmi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-cqS5yxSnmvcS1Ytg1T1e21b1mF0"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 252,
    "path": "../public/assets/chart-column-CyUs_zmi.js"
  },
  "/assets/check-lkJbk1Td.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-vo26f17qmme+CtpHJYYrRxj5ukA"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 120,
    "path": "../public/assets/check-lkJbk1Td.js"
  },
  "/assets/careers-D8Rmd4MB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67-JTUodgo5erz/MHRtmqe7kHiGDnk"',
    "mtime": "2026-06-23T10:48:48.799Z",
    "size": 103,
    "path": "../public/assets/careers-D8Rmd4MB.js"
  },
  "/assets/circle-check-Dge6YbPc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-I/sQK/o/BtgMnMO5SeijdnIDwkY"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 174,
    "path": "../public/assets/circle-check-Dge6YbPc.js"
  },
  "/assets/careers.index-DI4LjI8o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69a7-1xuaUzCT6MlpPywnEdJJjO/zh4g"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 27047,
    "path": "../public/assets/careers.index-DI4LjI8o.js"
  },
  "/assets/arrow-up-right-C0ta3QU6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-FXdzjhMMeLEpgB7SPMzpL+K3ozw"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-C0ta3QU6.js"
  },
  "/assets/clock-CtAqoK7x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a5-HGY2+0CnBmggwA6B8W9PCoONnyg"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 165,
    "path": "../public/assets/clock-CtAqoK7x.js"
  },
  "/assets/company.index-CPiwLm1M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5245-a2CfkG+zf+3eJUAvPNxRbMYv4kE"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 21061,
    "path": "../public/assets/company.index-CPiwLm1M.js"
  },
  "/assets/company.partner-B-S_z82v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e14-lfmWX5efI/3mlNpi3GLmlqrBVdI"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 7700,
    "path": "../public/assets/company.partner-B-S_z82v.js"
  },
  "/assets/contact-CYiXuSVO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"246a-ZWTugl4dpB1jqUTuP7mEc9PhwmA"',
    "mtime": "2026-06-23T10:48:48.799Z",
    "size": 9322,
    "path": "../public/assets/contact-CYiXuSVO.js"
  },
  "/assets/demo-zfxYEV8p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1b7d-SlS5zkOJA/o6vrhBd8uX9Czee0o"',
    "mtime": "2026-06-23T10:48:48.799Z",
    "size": 7037,
    "path": "../public/assets/demo-zfxYEV8p.js"
  },
  "/assets/cpu-CQGFCzq_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"283-f4VHt1tTA2WTy6PhkEY1M1H8bJU"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 643,
    "path": "../public/assets/cpu-CQGFCzq_.js"
  },
  "/assets/email-CKawPu-j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e03-NoRsEqD8SG+XGDN7TFfPjGcIKd0"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 3587,
    "path": "../public/assets/email-CKawPu-j.js"
  },
  "/assets/database-BZnr-aMt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f4-Fsl8YWPCVEnHLGhlL8GrvL9FCjQ"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 244,
    "path": "../public/assets/database-BZnr-aMt.js"
  },
  "/assets/GlassCard-BVxvS8X1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ed-xj3/tCVRrIJMzHdG2pZbGTK1reo"',
    "mtime": "2026-06-23T10:48:48.802Z",
    "size": 493,
    "path": "../public/assets/GlassCard-BVxvS8X1.js"
  },
  "/assets/hero-1-BKoqH8PV.jpg": {
    "type": "image/jpeg",
    "etag": '"27c18-vdX8wU8fgK6ML0yTY1Fq7LU6pjQ"',
    "mtime": "2026-06-23T10:48:48.798Z",
    "size": 162840,
    "path": "../public/assets/hero-1-BKoqH8PV.jpg"
  },
  "/company-assistant.lottie": {
    "type": "application/zip+dotlottie",
    "etag": '"d0f9-n8vVa7WPkN3V8Y+WGoQv9D3jcLQ"',
    "mtime": "2026-06-22T10:47:03.471Z",
    "size": 53497,
    "path": "../public/company-assistant.lottie"
  },
  "/careers-anim.json": {
    "type": "application/json",
    "etag": '"27b32-ZvnLRpacGJELqLQltpdgP7XQxFk"',
    "mtime": "2026-06-19T07:18:45.733Z",
    "size": 162610,
    "path": "../public/careers-anim.json"
  },
  "/assets/hero-2-BDdFOiNn.jpg": {
    "type": "image/jpeg",
    "etag": '"14a76-MfLfgpbl3YwltaXiMD+qmHxHIII"',
    "mtime": "2026-06-23T10:48:48.798Z",
    "size": 84598,
    "path": "../public/assets/hero-2-BDdFOiNn.jpg"
  },
  "/assets/index-BTeQ5ZvB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"71806-wA61hkiNdied4mSFHPLCMeovN0U"',
    "mtime": "2026-06-23T10:48:48.799Z",
    "size": 464902,
    "path": "../public/assets/index-BTeQ5ZvB.js"
  },
  "/assets/index-Te0XdYKV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fa6-PSsktBKNOJzmR9CHrIO5DyEcXHg"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 4006,
    "path": "../public/assets/index-Te0XdYKV.js"
  },
  "/assets/jobs-CAzNYKWv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20e4-AqZ5feX8nxF4KrIYs57UIfsPIRU"',
    "mtime": "2026-06-23T10:48:48.802Z",
    "size": 8420,
    "path": "../public/assets/jobs-CAzNYKWv.js"
  },
  "/assets/index-DBQiZdjB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1044e-CEkpAGATxsMOoNesP2UzGDWgQio"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 66638,
    "path": "../public/assets/index-DBQiZdjB.js"
  },
  "/assets/logo-DDV238NI.svg": {
    "type": "image/svg+xml",
    "etag": '"81f8-1FaSbuA0h52UNZc1sDI35JKZ2YQ"',
    "mtime": "2026-06-23T10:48:48.798Z",
    "size": 33272,
    "path": "../public/assets/logo-DDV238NI.svg"
  },
  "/assets/insights-ncfstuSp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0f-XX47m2pnM9TNB8SFsgSEgfncXcs"',
    "mtime": "2026-06-23T10:48:48.799Z",
    "size": 3343,
    "path": "../public/assets/insights-ncfstuSp.js"
  },
  "/assets/products.nexus-CluIaxWX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d64-RkQrL+jTt5feikFgm6CuP6SF6hA"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 3428,
    "path": "../public/assets/products.nexus-CluIaxWX.js"
  },
  "/assets/products.netra-D50LDLRj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fa6d-3a9C8mcCIlyO/dFQKxVSdSCCrz0"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 64109,
    "path": "../public/assets/products.netra-D50LDLRj.js"
  },
  "/assets/products.netiq-CIrSju7q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dcbf-3MXHynq0vUsgjy3xDt5AGkLwhq8"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 56511,
    "path": "../public/assets/products.netiq-CIrSju7q.js"
  },
  "/assets/project-2-sDuyGLt_.jpg": {
    "type": "image/jpeg",
    "etag": '"a983-MNOUkok48wzC/qwTtaps/3ju2i8"',
    "mtime": "2026-06-23T10:48:48.796Z",
    "size": 43395,
    "path": "../public/assets/project-2-sDuyGLt_.jpg"
  },
  "/assets/project-1-DvQesRJk.jpg": {
    "type": "image/jpeg",
    "etag": '"26417-ksbw8Jx56Rg2/Nc+9Ju8jPAa7Kc"',
    "mtime": "2026-06-23T10:48:48.798Z",
    "size": 156695,
    "path": "../public/assets/project-1-DvQesRJk.jpg"
  },
  "/assets/project-3-MXJEPBPd.jpg": {
    "type": "image/jpeg",
    "etag": '"2d14c-j/Dg6yhSBtppjftf8iuCWmXU0dI"',
    "mtime": "2026-06-23T10:48:48.796Z",
    "size": 184652,
    "path": "../public/assets/project-3-MXJEPBPd.jpg"
  },
  "/assets/project-4-CXq_w1I1.jpg": {
    "type": "image/jpeg",
    "etag": '"21e89-2hltwwYm3B/wwMe+s8chIJqFPq4"',
    "mtime": "2026-06-23T10:48:48.796Z",
    "size": 138889,
    "path": "../public/assets/project-4-CXq_w1I1.jpg"
  },
  "/assets/projects.index-BpqUAfGX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a74-LjnhU++X+Br/9OwQNQ1hma3ueoY"',
    "mtime": "2026-06-23T10:48:48.799Z",
    "size": 2676,
    "path": "../public/assets/projects.index-BpqUAfGX.js"
  },
  "/assets/projects._slug-c_TOPTDO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1304-CvD3ZGDN7O3EDiOSxKmzVKPSUAw"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 4868,
    "path": "../public/assets/projects._slug-c_TOPTDO.js"
  },
  "/assets/radio-EYOM-ruL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2c7-IVpACZ2kshGP/f4HMNHxnpBt2yc"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 711,
    "path": "../public/assets/radio-EYOM-ruL.js"
  },
  "/assets/proxy-DoFDvIPf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1df24-IEOLmtmx9Svbfc2lOcqdtxnhmBs"',
    "mtime": "2026-06-23T10:48:48.802Z",
    "size": 122660,
    "path": "../public/assets/proxy-DoFDvIPf.js"
  },
  "/assets/projects._slug-BGRc4Czf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d-N3r8E6xf9/1egjI2NVsB/oHHsRc"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 365,
    "path": "../public/assets/projects._slug-BGRc4Czf.js"
  },
  "/assets/search-CI2AWyIK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-S9IpHtberfOC/q3hTQVhud3x1D4"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 170,
    "path": "../public/assets/search-CI2AWyIK.js"
  },
  "/assets/shield-BSAS__ZE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"317-WNgV7GblvQLCcxhpxHQWI6QG2FM"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 791,
    "path": "../public/assets/shield-BSAS__ZE.js"
  },
  "/assets/shield-check-CikWypfh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-5FCw0T2pqHwFoaicqHJcXNRUhPg"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 316,
    "path": "../public/assets/shield-check-CikWypfh.js"
  },
  "/assets/services-CQvlWQ5v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"992f7-kh8tRPizVbFJwue4A7vRrgW0ATc"',
    "mtime": "2026-06-23T10:48:48.803Z",
    "size": 627447,
    "path": "../public/assets/services-CQvlWQ5v.js"
  },
  "/assets/signal-CFwuiDwu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10d-dQoipmbH1Zic7W0Wv7AAsOZtXKA"',
    "mtime": "2026-06-23T10:48:48.799Z",
    "size": 269,
    "path": "../public/assets/signal-CFwuiDwu.js"
  },
  "/assets/sparkles-lumxjsa4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ef-K6LiF5vZlXTHAwUZbTzuPwTYbws"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 495,
    "path": "../public/assets/sparkles-lumxjsa4.js"
  },
  "/assets/target-DZUYzL3M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"de-bPtysHpWe58PnwrC+dpGM0fJa/w"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 222,
    "path": "../public/assets/target-DZUYzL3M.js"
  },
  "/assets/user-check-46BFoIKT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c23-yb64qfI492+/5oA5HdoyEqlWhQs"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 3107,
    "path": "../public/assets/user-check-46BFoIKT.js"
  },
  "/assets/tower-control-pwV5jZtg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"198-NbeFEZGZaIPVCvWit+axVX7mw2k"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 408,
    "path": "../public/assets/tower-control-pwV5jZtg.js"
  },
  "/assets/wifi-BLWs3f-T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cd1-FGUVjtxBhmw0V4H093n0U3d/pl0"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 3281,
    "path": "../public/assets/wifi-BLWs3f-T.js"
  },
  "/assets/wrench-CuskKk-6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"27f-heRnafWmj/Hx+ZkAtH5rYNIgr2U"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 639,
    "path": "../public/assets/wrench-CuskKk-6.js"
  },
  "/assets/zap-BX8G0zzj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6a7-h2cxdiILGdr8o4IPMDHRVu6XVVE"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 1703,
    "path": "../public/assets/zap-BX8G0zzj.js"
  },
  "/assets/users-L1Y9MwFH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-UXLkWP69vfcIYiKVQT1a4pW0iHQ"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 307,
    "path": "../public/assets/users-L1Y9MwFH.js"
  },
  "/assets/trending-up-Kj-IS_E6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b0-Gqaf6NPhw8J0DhbN4a+wI5bHg/Y"',
    "mtime": "2026-06-23T10:48:48.801Z",
    "size": 176,
    "path": "../public/assets/trending-up-Kj-IS_E6.js"
  },
  "/assets/warehouse-K7xZgj4N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8c1-L0HOu6pYEYjYhXkLiFkLaBYxbGY"',
    "mtime": "2026-06-23T10:48:48.800Z",
    "size": 2241,
    "path": "../public/assets/warehouse-K7xZgj4N.js"
  },
  "/assets/styles-DQV5jEpD.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"297e6-VonsAV5TonSd8+z6rDlztqpSjto"',
    "mtime": "2026-06-23T10:48:48.799Z",
    "size": 169958,
    "path": "../public/assets/styles-DQV5jEpD.css"
  },
  "/analytics-performance.json": {
    "type": "application/json",
    "etag": '"5ff061-rdlcGLNqMEo28pkPy3qk0/H7FcQ"',
    "mtime": "2026-06-22T12:49:09.086Z",
    "size": 6287457,
    "path": "../public/analytics-performance.json"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _BE1AMZ = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_w9AH4J = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_w9AH4J };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_BE1AMZ)
].filter(Boolean);
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    middleware.push(...h3App["~middleware"]);
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
