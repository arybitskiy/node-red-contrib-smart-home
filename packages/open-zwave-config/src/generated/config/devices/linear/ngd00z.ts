import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014F:3530:4744",
            name: "OzwInfoPage",
          },
          { text: "images/linear/ngd00z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1458/",
            id: "3530",
            name: "ZWProductPage",
            type: "4744",
          },
          { text: "n/a", name: "WakeupDescription" },
          {
            text:
              'With the hub in "Remove" mode, press the release the button on the side of the GD00Z.',
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3530",
            name: "FrequencyName",
            type: "4744",
          },
          {
            text:
              'With the hub in "Add" mode, press the release the button on the side of the GD00Z.',
            name: "InclusionDescription",
          },
          { text: "GD00Z-4", id: "3530", name: "Identifier", type: "4744" },
          { text: "GD00Z-4", name: "Name" },
          {
            text:
              'Garage Door Remote Controller Accessory opens or closes a sectional garage door remotely through a Z-Wave certified Gateway or Security Panel. Compatible with virtually any garage door opener connected to a sectional garage door. Audible and visual warnings prior to remotely-activated door movement, meeting UL 325 safety requirements. Included tilt sensor reports door "open" or "close" information.',
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1458/236956BX1 GD00Z-4 GoControl Instructions.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Press and release the button in the side of the unit 5 times within 10 seconds only when the primary controller is not available.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1298/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1458/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
