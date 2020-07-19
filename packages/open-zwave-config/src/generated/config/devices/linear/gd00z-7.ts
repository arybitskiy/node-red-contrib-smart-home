import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014F:3531:4744",
            name: "OzwInfoPage",
          },
          { text: "images/linear/gd00z-7.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2904/",
            id: "3531",
            name: "ZWProductPage",
            type: "4744",
          },
          { text: "Z-Wave Garage Door Controller", name: "Name" },
          {
            text:
              "1. Place your Z-Wave Controller into Exclude mode.\n2. Press and release the link button on the GD00Z-6.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Place your Z-Wave Controller into Include mode.\n2. Press and release the link button on the GD00Z-6.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3531",
            name: "FrequencyName",
            type: "4744",
          },
          { text: "GD00Z-6", id: "3531", name: "Identifier", type: "4744" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2904/10015084AX1 UG.pdf",
            name: "ProductManual",
          },
          {
            text:
              'The GoControl GD00Z-6 is the next iteration of the best selling line of Z-Wave controlled remote garage door status indicator and activator.  Adding S2 security and OTA capability, the GD00Z-6 continues to Nortek’s leadership positing in the IOT market.   Open or close a sectional garage door remotely through a Z-Wave certified Gateway or Security Panel. Compatible with virtually any garage door opener connected to a sectional garage door. Audible and visual warnings prior to remotely-activated door movement, meeting UL 325 safety requirements. Included tilt sensor reports door "open" or "close" information.',
            name: "Description",
          },
          {
            text:
              "Reset the GD00Z-6 by pressing the LINK button 5 times. A quick beep followed by a longer beep will indicate the reset.\nReset should only be used in the case of a missing or inoperative primary controller.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2635/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2904/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
