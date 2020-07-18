import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010A:5200:1200",
            name: "OzwInfoPage",
          },
          { text: "images/vitrum/vitrumII-Switch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/87/",
            id: "5200",
            name: "ZWProductPage",
            type: "1200",
          },
          {
            text: "Vitrum II EU on-off",
            id: "5200",
            name: "Identifier",
            type: "1200",
          },
          {
            text: "http://www.ivitrum.com/index.php?file=contact",
            name: "ProductSupport",
          },
          {
            text: "CEPT (Europe)",
            id: "5200",
            name: "FrequencyName",
            type: "1200",
          },
          { text: "Vitrum II EU on-off wireless", name: "Name" },
          {
            text:
              "http://www.ivitrum.com/index.php?file=prodotti&form_id_products=13&qt=1",
            name: "ProductPage",
          },
          {
            text:
              '2 channel Switch - 503 BOX - ZWave. Smart Switch II\n\nTwo buttons Smart Glass Switch \nSwitch Device for Modbus System\nwith two switches for lighting control \nor alternatively, sequential \npre-programmed settings\nConfigurable aural feedback \n\n\nAvailable in British Standard & European Standard;\nDimensions:BS 95x95mm; EU 125x95mm; \nOn/Off by "One Touch"\nDimming is by the "iPod ®-like" touch control\nCapacitive technology to adjust lighting level',
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/87/xml",
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
