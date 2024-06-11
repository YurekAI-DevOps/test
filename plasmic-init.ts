import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "j6fm1WR348VwS6PKLwN2bF",
      token: "Xg8ed1ipAZBL0ROUnpuf6GYfg29SECcyUMZBJoCQRl07RvKDRipUG2nzs9fGkemyZZhMSypGcaDLVVgeMk2Ueg",
    },
  ],
  host: "https://builder.yurekai.com",
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
