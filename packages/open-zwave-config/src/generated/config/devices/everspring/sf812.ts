import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:000D",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/sf812.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/618/",
            id: "0001",
            name: "ZWProductPage",
            type: "000D",
          },
          { text: "http://www.everspring.com/SF812.aspx", name: "ProductPage" },
          { text: "SF812-ANZ", id: "0001", name: "Identifier", type: "000D" },
          { text: "Smoke Detector", name: "Name" },
          {
            text: "CEPT (Europe) / Australia / New Zealand",
            id: "0001",
            name: "FrequencyName",
            type: "000D",
          },
          {
            text:
              "The photoelectric Smoke Detector is a Z-Wave enabled device which is fully compatible with any Z-Wave enabled network.  \n\nThe detector is designed to sense smoke that comes into the detector chamber.  It does not sense gas, heat, or flame. The working principle is when the smoke detector detects a certain density of smoke, the horn of smoke detector will sound and in the meantime, the detector will emit the signals to the associated devices for further execution.  It can provide precious time for you and your family to escape before a fire spreads.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/272/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/618/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Reports", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
