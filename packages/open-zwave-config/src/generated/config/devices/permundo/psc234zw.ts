import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0245:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "images/permundo/psc234zw.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1575/",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "The wireless plug socket PSC234ZW allows you to remotely control electrical appliances. It features a metering function to measure the power consumption and the accumulated energy usage of connected equipment. The built-in metering unit is of high quality: it calculates the true-power and also works for small loads from 1W upwards. This feature is important to have a correct measurement value also for electronic loads like led lamps.\nThe PSC234ZW has a built-in safety features that will switch-off the output in case of too high temperature or overload.\nAdditionally the PSC234 has a feature to switch the load on at zero voltage and switch the load off at zero current. This leads to a very high number of possible switching cycles also for difficult loads like led-lamps or motors, e.g. pumps.",
            name: "Description",
          },
          { text: "PSC234ZW", id: "0001", name: "Identifier", type: "0003" },
          { text: "Smart Plug", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1575/PSC234ZW_V06.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Please use this procedure only if the primary controller is missing or inoperable:\nThe device can be put into factory default state manually by the following procedure:\n1) hold the touch-button until the led \n    shows red light\n2) release the touch-button and hold the \n    touch-button again until the led starts \n    to flash green\nThe PSC234 confirms the successful completion of the factory reset procedure by steady red flashing.",
            name: "ResetDescription",
          },
          {
            text:
              "When a PSC234 that is not associated to a Z-Wave network, is inserted into the mains outlet, it will flash once red followed by 2 green flashed followed by steady red flashing. The PSC234 can now be added to (=inclusion) or removed from (=exclusion) a Z-Wave network:\n1) start inclusion/exclusion on the primary \n    controller\n2) hold the touch button until the led  \n    shows green light\n3) release the touch button\n The PSC234 will confirm successful removal/exclusion by steady red flashing. At the time of exclusion the device is factory reset.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "When a PSC234 that is not associated to a Z-Wave Network, is inserted into the mains outlet, it will flash once red followed by 2 green flashed followed by steady red flashing. The PSC234 can now be added to (=inclusion) or removed from (=exclusion) a Z-Wave network:\n1) start inclusion/exclusion on the primary \n    controller\n2) hold the touch button until the led  \n    shows green light\n3) release the touch button\nThe PSC234 will confirm successful addition to the network by 5 green flashes.\nThe PSC234 will confirm successful removal/exclusion by steady red flashing. At the time of exclusion the device is factory reset.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1575/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
