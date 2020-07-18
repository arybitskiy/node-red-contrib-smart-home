import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/003B:504C:634B",
            name: "OzwInfoPage",
          },
          { text: "images/schlage/fe599.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/311/",
            id: "504C",
            name: "ZWProductPage",
            type: "634B",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "504C",
            name: "FrequencyName",
            type: "634B",
          },
          {
            text:
              "cKPD FE599 z-wave Lock. Z-Wave enabled lock. We make it simple to get started with remote home security with the Schlage Home Security Kit. Everything you need to make sure your home and family are safe and secure when you’re not there is available in one box . Getting notified any time your loved ones come home or leave the house. Assigning codes to let in chosen guests. Turning on a light at night in an empty house – making it look full of life. Nexia security features come together in a system you can manage and monitor any time, whether from your office computer or on the go from your tablet or smart phone.",
            name: "Description",
          },
          {
            text:
              "http://link.schlage.com/Products/Pages/DeadboltStarterKit.aspx",
            name: "ProductSupport",
          },
          {
            text:
              "http://link.schlage.com/Products/Pages/DeadboltStarterKit.aspx",
            name: "ProductPage",
          },
          { text: "cKPD FE599", id: "504C", name: "Identifier", type: "634B" },
          { text: "cKPD FE599 Z-Wave Lock", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/311/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ id: "112" }],
  },
};

export default config;
