import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0095:0001:3103",
            name: "OzwInfoPage",
          },
          { text: "images/qees/reto-plugin-switch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/614/",
            id: "0001",
            name: "ZWProductPage",
            type: "3103",
          },
          {
            text:
              "QEES RETO Plug-in Dimmer Plus brings along comfort and elegance with an extremely easy setup and a unique design. With its help you can now wirelessly control all the dimmable loads you have inside your home.\n\n\nQEES RETO Plug-in Dimmer Plus is a Z-Wave-controlled 400W universal dimmer (US frequency) with schuko plug-in socket outlet, built-in power meter, multi-color LED feedback and one programmable group for retrofit installation.\n\n\nQEES RETO Plug-in Dimmer Plus’s software can be upgraded “over the air”, allowing the device to receive additional features or bug fixes through firmware updates and software apps.This is a unique feature of all QEES products and it facilitates a future-proof, contemporary and flexible infrastructure solution for the building.\n\n\nQEES RETO Plug-in Dimmer Plus is compatible with all Z-Wave certified devices from other manufacturers. It also acts as a repeater inside your Z-Wave network increasing the range for your remote control.\n\n\nLike all QEES products, QEES RETO Plug-in Dimmer Plus has a self-calibrating built-in power meter and can switch off the device that otherwise would consume power when not needed.",
            name: "Description",
          },
          { text: "http://www.qees.eu/support", name: "ProductSupport" },
          {
            text: "U.S. / Canada / Mexico / CEPT (Europe) / CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "3103",
          },
          { text: "QEES P313B Plug-in dimmer", name: "Name" },
          {
            text:
              "http://www.qees.eu/products/plus-retrofit-series/plugin-in-socket-outlets/plugin-in-socket-dimmer-us/product/72/106/Plus-Retrofit-Series/Plus-RETO-Plug-in/qees-reto-plug-in-dimmer-plus-us",
            name: "ProductPage",
          },
          {
            text: "313-B(KFBGLE)(WB)-A1",
            id: "0001",
            name: "Identifier",
            type: "3103",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/596/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/597/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/613/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/614/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { action: "remove", id: "48" },
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
