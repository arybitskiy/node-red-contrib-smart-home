import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010A:8A00:2100",
            name: "OzwInfoPage",
          },
          { text: "images/vitrum/vitrumII-Dimmer.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/94/",
            id: "8A00",
            name: "ZWProductPage",
            type: "2100",
          },
          {
            text:
              '2 channel Dimmer - 503 BOX - ZWave. Smart Switch II\n\nTwo buttons Smart Glass Switch \nSwitch Device for Modbus System\nwith two switches for lighting control \nor alternatively, sequential \npre-programmed settings\nConfigurable aural feedback \n\n\nAvailable in British Standard & European Standard;\nDimensions:BS 95x95mm; EU 125x95mm; \nOn/Off by "One Touch"\nDimming is by the "iPod ®-like" touch control\nCapacitive technology to adjust lighting level',
            name: "Description",
          },
          {
            text: "Vitrum II BS",
            id: "8A00",
            name: "Identifier",
            type: "2100",
          },
          { text: "Vitrum II EU dimmer wireless", name: "Name" },
          {
            text:
              "http://www.ivitrum.com/index.php?file=prodotti&form_id_products=13&qt=1",
            name: "ProductPage",
          },
          {
            text: "CEPT (Europe)",
            id: "8A00",
            name: "FrequencyName",
            type: "2100",
          },
          {
            text: "http://www.ivitrum.com/index.php?file=contact",
            name: "ProductSupport",
          },
          {
            text: "https://products.z-wavealliance.org/products/120/",
            id: "4A00",
            name: "ZWProductPage",
            type: "1100",
          },
          {
            text: "Vitrum II EU",
            id: "4A00",
            name: "Identifier",
            type: "1100",
          },
          {
            text: "CEPT (Europe)",
            id: "4A00",
            name: "FrequencyName",
            type: "1100",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/94/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/120/xml",
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
        id: "96",
        Compatibility: [
          { IgnoreMCCapReports: [true], MapRootToEndpoint: [true] },
        ],
      },
    ],
  },
};

export default config;
