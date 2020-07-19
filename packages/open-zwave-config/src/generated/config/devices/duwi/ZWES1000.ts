import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0064:0000:2001",
            name: "OzwInfoPage",
          },
          { text: "images/duwi/ZWES1000.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/351/",
            id: "0000",
            name: "ZWProductPage",
            type: "2001",
          },
          {
            text: "CEPT (Europe)",
            id: "0000",
            name: "FrequencyName",
            type: "2001",
          },
          {
            text:
              "For wireless switching of: light bulbs, HV and LV halogen lamps or electrical equipment (e.g. fans). Combinable with all Z-Wave transmitters and remote controls, with installation in splash-proof  junction box IP 44, can be selectively installed in flush-mounted power points and canopies or triggered directly via wireless rockers.",
            name: "Description",
          },
          { text: "ZW-ES-1000 - Flush-mount Z-Wave switch", name: "Name" },
          {
            text: "http://www.duewi.de/index.php?productid=29184",
            name: "ProductSupport",
          },
          {
            text: "http://www.duewi.de/index.php?productid=37347",
            name: "ProductPage",
          },
          { text: "ZW-ES-1000", id: "0000", name: "Identifier", type: "2001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/338/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/351/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ action: "remove", id: "38" }],
  },
};

export default config;
