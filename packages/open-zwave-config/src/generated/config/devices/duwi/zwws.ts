import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0064:0000:5002",
            name: "OzwInfoPage",
          },
          { text: "images/duwi/zwws.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/342/",
            id: "0000",
            name: "ZWProductPage",
            type: "5002",
          },
          {
            text: "CEPT (Europe)",
            id: "0000",
            name: "FrequencyName",
            type: "5002",
          },
          {
            text: "http://www.duewi.de/index.php?productid=37276",
            name: "ProductPage",
          },
          {
            text: "http://www.duewi.de/index.php?productid=29184",
            name: "ProductSupport",
          },
          {
            text:
              "For wireless switching, resp. control of: all Z-Wave wireless switch inserts and wireless intermediate plugs, existing installations can also  be expanded without flush-mounted power point,  high flexibility with installation due to extremely flat design, to stick or screw on to various substrates, for installation in existing switch box or clipping-in in multiple combinations.",
            name: "Description",
          },
          { text: "ZWWS - Z-Wave wall-mounted Wall Switch", name: "Name" },
          { text: "ZWWS", id: "0000", name: "Identifier", type: "5002" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/339/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/342/xml",
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
