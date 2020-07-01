import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";
import { home } from "./home";
import { projects } from "./projects";

CMS.registerMediaLibrary(cloudinary);

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: "git-gateway",
      branch: "master",
    },
    media_library: {
      name: "cloudinary",
      config: {
        cloud_name: "mjedi",
        api_key: "428699394966471",
      },
      settings: {
        autoFilename: true,
      },
    },
    public_folder: "/assets",
    collections: [home, projects],
  },
});
