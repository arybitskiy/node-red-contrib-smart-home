import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 8,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0095:0001:3101",
            name: "OzwInfoPage",
          },
          { text: "images/qees/reto-dimmer-plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/612/",
            id: "0001",
            name: "ZWProductPage",
            type: "3101",
          },
          {
            text: "311-BQ(WB)-A1",
            id: "0001",
            name: "Identifier",
            type: "3101",
          },
          {
            text: "http://www.qees.eu/support/support-center",
            name: "ProductSupport",
          },
          {
            text: "U.S. / Canada / Mexico / CEPT (Europe) / CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "3101",
          },
          { text: "QEES P311B dimmer with power meter", name: "Name" },
          {
            text:
              "QEES RETO Shell Dimmer Plus is a highly aesthetic Z-Wave-controlled (EU frequency) 400W universal dimmer for any kind of dimmable load: Energy saving, halogen, LED and incandescent light bulbs.\n \nQEES RETO Shell Dimmer Plus is a wirelessly controlled universal dimmer for retrofit installation. It can be operated locally by pushing the top cover; this action will dim the local load. The device also monitors the power consumption of the load.\n\nQEES RETO Shell Dimmer Plus’s software can be upgraded “over the air”, allowing the device to receive additional features and bug fixes through firmware updates and software apps. This is a unique feature of all QEES products and it facilitates a future-proof, contemporary and flexible infrastructure solution for the building.\n\nQEES RETO Shell Dimmer Plus is compatible with all Z-Wave certified devices from other manufacturers. It also acts as a repeater inside your Z-Wave network increasing the range for your remote control.\n\nLike all QEES products, QEES RETO Shell Dimmer Plus has a self-calibrating built-in power meter and can switch off devices that otherwise would consume power when not needed.",
            name: "Description",
          },
          {
            text:
              "http://www.qees.eu/products/z-wave/plus-retofit-series/turtle-shells/turtle-shell-dimmer-eu/product/76/98/Plus-Retofit-Series/Plus-RETO-Shell/qees-reto-shell-dimmer-plus-eu",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/594/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/595/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/611/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/612/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 8,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { action: "remove", id: "38" },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "232" }],
          },
        ],
      },
    ],
  },
};

export default config;
