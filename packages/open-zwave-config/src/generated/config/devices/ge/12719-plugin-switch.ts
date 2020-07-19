import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3031:5052",
            name: "OzwInfoPage",
          },
          { text: "images/ge/12719-plugin-switch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1210/",
            id: "3031",
            name: "ZWProductPage",
            type: "5052",
          },
          { text: "45703", id: "3031", name: "Identifier", type: "5052" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3031",
            name: "FrequencyName",
            type: "5052",
          },
          { text: "http://www.ezzwave.com", name: "ProductPage" },
          {
            text: "Jasco Lighting and Small Appliance Module (45703)",
            name: "Name",
          },
          {
            text: "Florescent Light and Appliance Module",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1193/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1210/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
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
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
