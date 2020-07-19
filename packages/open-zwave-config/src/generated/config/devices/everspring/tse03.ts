import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:0009",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/tse03.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/257/",
            id: "0001",
            name: "ZWProductPage",
            type: "0009",
          },
          { text: "TSE03-JOEL", id: "0001", name: "Identifier", type: "0009" },
          { text: "TSE03-JOEL - Z-Wave Bell", name: "Name" },
          {
            text:
              "Z-Wave Bell (EU)  300 Series UTSE03A Door Bell Set\nFeatures：\n◆Adopt Z-Wave protocol to secure the success of  wireless two way communication\n◆USB port to download 45 second of high quality voice files \n◆Visal and audible alarm indications\n◆Low battery indication\n◆Small form factor\n◆IP44 for the push button\n◆Z-Wave V5.02\n◆Consist of TSE03 Doorbell and TAC06 push button",
            name: "Description",
          },
          {
            text: "http://www.everspring.com/Contact-Us.aspx",
            name: "ProductSupport",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0009",
          },
          {
            text: "http://www.everspring.com/UTSE03A.aspx",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/257/xml",
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
      { id: "132", Compatibility: [{ CreateVars: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Reports", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
