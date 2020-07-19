import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001A:0002:4449",
            name: "OzwInfoPage",
          },
          { text: "images/cooper/rf9534.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/761/",
            id: "0002",
            name: "ZWProductPage",
            type: "4449",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "4449",
          },
          { text: "RF9536", id: "0002", name: "Identifier", type: "4449" },
          {
            text:
              "RF9536 - 1000W Incandescent Smart Dimmer ASPIRE RF Dimmers replace regular switches or dimmers to provide local and remote ON/OFF/DIM/BRIGHT control and are compatible with incandescent lighting loads. ASPIRE RF Dimmers provide other programmable functions (scenes, events, association, child lockout, etc.) when used with ASPIRE RF or other Z-Wave compliant controllers*.\n\n(*Note: some specific ASPIRE RF features may not be programmable)",
            name: "Description",
          },
          { text: "ASPIRE RF 1000W Incandescent Smart Dimmer", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/760/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/761/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
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
