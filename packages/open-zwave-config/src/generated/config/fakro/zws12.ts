import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0085:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "images/fakro/zws12.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/105/",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "Fakro CHAIN ACTUATOR ZWS12", name: "Name" },
          {
            text: "http://www.fakro.com/htmlen/376.php",
            name: "ProductSupport",
          },
          {
            text:
              "Window opener 12VDCThe ZWS12 and ZW230 chain motors thanks to their small dimensions and suitable force output are ideal for roof window operating, being fully compatible with the Z-Wave system. The motors can be applied in both centre pivot and top hung and pivot roof windows as well as windows of non-standard dimensions.\nThe maximum chain reach is 24cm for ZWS12 and 36cm for ZW230. The motors are equipped with built-in overload protection which acts as a sensor of correct window closing.",
            name: "Description",
          },
          { text: "http://www.fakro.com/htmlen/376.php", name: "ProductPage" },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/105/xml",
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
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
