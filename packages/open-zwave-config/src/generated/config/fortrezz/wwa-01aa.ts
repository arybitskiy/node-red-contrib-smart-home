import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0084:0210:0013",
            name: "OzwInfoPage",
          },
          { text: "images/fortrezz/wwa-01aa.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/302/",
            id: "0210",
            name: "ZWProductPage",
            type: "0013",
          },
          { text: "http://www.fortrezz.com/", name: "ProductSupport" },
          {
            text:
              "Wireless Water & Freeze Alarm. Wireless Water Alarm WWA-01AA. This product will provide you with peace of mind and the protection you expect. Water damages are caused by leaking pipes, corroded water heaters, water storage tanks, fixtures in bathrooms, laundry rooms, refrigerator drip pans etc.\n\n•Wireless Water Alarm WWA-01AA is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network. Inclusion of this WWA-01 into a Z-WaveTM network allows remote status monitoring and alerts when the detector is triggered. Other Z-Wave nodes in the system also act as repeaters if they support that function.",
            name: "Description",
          },
          { text: "WWA-01AA - Wireless Water & Freeze Alarm", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0210",
            name: "FrequencyName",
            type: "0013",
          },
          { text: "http://www.fortrezz.com/", name: "ProductPage" },
          { text: "WWA-01AA", id: "0210", name: "Identifier", type: "0013" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/302/xml",
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
