import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0059:0005:0003",
            name: "OzwInfoPage",
          },
          { text: "images/horstmann/ssr303.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1618/",
            id: "0005",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "0005",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "The SSR 303 is a single channel relay/switch, it forms part of central heating control system, it can be operated by any third party controllers/Thermostat using ‘Binary Switch CC’ commands.\n\nSSR 303 will act as a repeater once added into the Z- Wave network, providing an alternative communication route for units which otherwise would not be within communication distance of each other.\n\nSSR 303 has a fail-safe mode where by the relay is turned OFF if another 'Thermostat Mode SET' command has not been received within 60 minutes.",
            name: "Description",
          },
          {
            text:
              "STEP 1: Ensure the Network LED is flashing on the SSR 303, if not follow  ‘Exclusion’ steps first.\nSTEP 2: Put the 3rd party controller into inclusion mode.\nSTEP 3: Press and hold the network button on the SSR 303 until the ‘ON’ LED’s start flashing.\nThe SSR 303 has been added onto the network when the ‘OFF’ LED goes solid red.\n\nNOTE: If the ON LED does not flash then the add process has been unsuccessful.",
            name: "InclusionDescription",
          },
          { text: "MAX10Z-384", id: "0005", name: "Identifier", type: "0003" },
          {
            text:
              "STEP 1: Put the 3rd party controller into exclusion mode.\nSTEP 2: Press and hold the network button on the SSR 303.\nThe SSR 303 has been removed from the network when the Network LED starts flashing.\n\nNOTE: If the Network LED does not flash the remove process has been unsuccessful.",
            name: "ExclusionDescription",
          },
          {
            text: "SSR 303 (Single Channel On/Off Power switch)",
            name: "Name",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1618/SSR 303 User Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              '"Please use this procedure only when the primary controller is missing or otherwise inoperable."\n\nFollow  ‘Exclusion’ steps.',
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1618/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            Group: [{ index: "1", label: "Lifeline", max_associations: "4" }],
          },
        ],
      },
      {
        id: "64",
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Idle Mode" },
              { index: "1", label: "Heat Mode" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
    ],
  },
};

export default config;
