import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010A:5100:1200",
            name: "OzwInfoPage",
          },
          { text: "images/vitrum/vitrumI-Switch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/8/",
            id: "5100",
            name: "ZWProductPage",
            type: "1200",
          },
          {
            text: "CEPT (Europe)",
            id: "5100",
            name: "FrequencyName",
            type: "1200",
          },
          {
            text: "http://www.ivitrum.com/index.php?file=contact",
            name: "ProductSupport",
          },
          {
            text: "http://www.vitrum.com/eng/content/vitrum-i",
            name: "ProductPage",
          },
          { text: "Vitrum I EU on-off wireless", name: "Name" },
          {
            text:
              '1 channel Switch - 503 BOX - ZWavene button Smart Glass Switch \nSwitch Device for Modbus System\nwith one switche for lighting control \nor alternatively, sequential \npre-programmed settings\nConfigurable aural feedback\n\nAvailable in British Standard & European Standard;\nDimensions:BS 95x95mm; EU 125x95mm; \nDimming is by the "iPod ®-like" touch control\nCapacitive technology to adjust lighting level.',
            name: "Description",
          },
          { text: "01E010020", id: "5100", name: "Identifier", type: "1200" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/8/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "96",
        Compatibility: [
          { IgnoreMCCapReports: [true], MapRootToEndpoint: [true] },
        ],
      },
    ],
  },
};

export default config;
