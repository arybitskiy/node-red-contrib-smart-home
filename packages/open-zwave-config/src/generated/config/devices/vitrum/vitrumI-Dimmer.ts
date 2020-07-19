import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010A:4900:1100",
            name: "OzwInfoPage",
          },
          { text: "images/vitrum/vitrumI-Dimmer.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/121/",
            id: "4900",
            name: "ZWProductPage",
            type: "1100",
          },
          {
            text: "http://www.ivitrum.com/index.php?file=contact",
            name: "ProductSupport",
          },
          { text: "Vitrum I EU dimmer wireless", name: "Name" },
          {
            text:
              '1 channel Dimmer - 503 BOX - Wireless. ne button Smart Glass Switch \nSwitch Device for Modbus System\nwith one switche for lighting control \nor alternatively, sequential \npre-programmed settings\nConfigurable aural feedback \n\n\nAvailable in British Standard & European Standard;\nDimensions:BS 95x95mm; EU 125x95mm; \nDimming is by the "iPod ®-like" touch control\nCapacitive technology to adjust lighting level',
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "4900",
            name: "FrequencyName",
            type: "1100",
          },
          {
            text:
              "http://www.ivitrum.com/index.php?file=prodotti&form_id_products=12&qt=1",
            name: "ProductPage",
          },
          { text: "Vitrum I EU", id: "4900", name: "Identifier", type: "1100" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/121/xml",
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
