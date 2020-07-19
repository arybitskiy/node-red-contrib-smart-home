import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0085:0002:0002",
            name: "OzwInfoPage",
          },
          { text: "images/fakro/arz.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/677/",
            id: "0002",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "http://www.fakro.com/htmlen/379.php", name: "ProductPage" },
          {
            text:
              "The ARZ Z-Wave external roller shutters, powered by 12VDC, have been adapted for wireless cooperation with the Z-Wave system. The shutter is designed for FAKRO roof windows and its installation is possible at any time after roof window installation. It is also possible to use the shutter for roof windows of other manufactures. Installed on the outside of the window, the roller shutter constitutes an optimum solution against overheating and provides additional protection of the window e.g. against falling tree branches etc. The roller shutter enables complete blackout and good sound reduction. It is also good protection from glazing excessive cooling during the winter. The roller shutter also means increased security. It has built-in overload protection and can be controlled by using standard Z-Wave controller.",
            name: "Description",
          },
          { text: "ARZ Z-Wave Roof Window Roller Shutter", name: "Name" },
          { text: "ARZ", id: "0002", name: "Identifier", type: "0002" },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/677/xml",
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
