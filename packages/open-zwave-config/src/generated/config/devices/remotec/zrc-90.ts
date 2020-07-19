import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/5254:8510:0001",
            name: "OzwInfoPage",
          },
          { text: "images/remotec/zrc-90.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1584/",
            id: "8510",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "Press “L+R” buttons simultaneously until LED light up to add the device into ZRC-90 Z-Wave network.",
            name: "InclusionDescription",
          },
          {
            text:
              "Click once on the “R” button to remove the device from ZRC-90 Z-Wave network.",
            name: "ExclusionDescription",
          },
          { text: "BW8510EU", id: "8510", name: "Identifier", type: "0001" },
          {
            text:
              "The ZRC-90 Scene Master is a Z-Wave Central Scene Controller. When one of the buttons on the ZRC-90 is pushed, your Z-Wave central controller will receive a signal which it can use to trigger unlimited control possibilities.  With 8 buttons, each supporting a long-press capability, you can control 16 different actions in your central controller.  The ZRC-90 is a great solution for triggering events more quickly than taking out your smart-phone and running a home control app.  The Scene Master is ideal for kids, elderlies and guests who may not have full access to your smart home’s mobile application and hence may not have the rights to switch on various lighting, heating, air conditioning and other home appliance.  With a convenient snap-in wall mount, the ZRC-90 can also be removed to keep it handy while you go about your home for the ultimate in simple convenience.",
            name: "Description",
          },
          { text: "ZRC-90EU", name: "Name" },
          {
            text:
              "Press and keep holding “R” button not less than 10 seconds.\nRelease “R” button then triple click on “R” button within 2 seconds.",
            name: "ResetDescription",
          },
          {
            text:
              "Enter to the Listening mode (Wake up) by click once on “W” button.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1584/F-BW8510xx (ZRC-90xx) User Manual_V1.01_20151030.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "8510",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1584/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 2,
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
