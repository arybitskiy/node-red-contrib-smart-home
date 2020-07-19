import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/015D:241C:0112",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zen22.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1946/",
            id: "241C",
            name: "ZWProductPage",
            type: "0112",
          },
          {
            text:
              "The switch will be reset to factory defaults only by exclusion using a Z-Wave controller. You may use any certified Z-Wave controller to exclude and reset the switch. This device may not be reset manually when the network’s primary controller is missing or otherwise inoperable. NOTE: All previously recorded activity and custom settings will be erased from the device’s memory.",
            name: "ResetDescription",
          },
          {
            text:
              "PRODUCT FEATURES:\n- Manual or remote on/off control and dimming from your mobile device or computer (when included to a Z-Wave gateway controller)\n- Z-Wave Plus with improved 500 chip for faster and safer wireless communication\n- Works with most high-quality DIMMABLE LED, CFL, and incandescent bulbs\n- Based on universal command classes - supported by most Z-Wave controllers\n- May be associated and grouped with other Z-Wave devices for advanced home automation\n- LED indicator to help locate the switch in dark space\n- Simple elegant design with screwless snap-on wall plate included\n- Built-in Z-Wave signal repeater for a stronger and more reliable network\n\nSPECIFICATIONS:\nModel Number: ZEN22\nZ-Wave Signal Frequency: 908.42 MHz\nPower: 120 VAC, 60 Hz\nMaximum Loads: 500W Single-gang, 400W Double-gang, 300W Triple-gang Incandescent, 150W CFL or LED\nRange: Up to 100 feet line of sight\nOperating Temperature: 32-104° F (0-40° C)\nInstallation and Use: Indoor only",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1946/zooz-z-wave-plus-dimmer-switch-zen22-manual.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "241C",
            name: "FrequencyName",
            type: "0112",
          },
          {
            text:
              "1. Bring your Z-Wave gateway hub or controller as close to the switch as possible\n2. Put your Z-Wave controller in exclusion mode\n3. Tap the switch on and off quickly 3 times to complete the exclusion process\n4. The device should disappear from your controller's device list",
            name: "ExclusionDescription",
          },
          { text: "ZEN22", id: "241C", name: "Identifier", type: "0112" },
          { text: "Zooz Z-Wave Dimmer Light Switch", name: "Name" },
          {
            text:
              "1. Bring your Z-Wave gateway hub or controller as close to the switch as possible\n2. Put your Z-Wave controller in inclusion mode\n3. Tap the switch on and off quickly 3 times to finalize the inclusion process\n4. A new dimming device should appear on your controller's device list\n\nTroubleshooting Tips:\nIf you are unable to include the Z-Wave dimmer to your controller, please try one of the following:\n- Bring the controller closer to your Z-Wave switch or use a hand-held secondary controller for inclusion\n- Tap your Z-Wave switch quicker 4 or 5 times once you put the controller in the inclusion mode to ensure the command has gone through\n- Put your controller in the EXCLUSION mode and tap the switch quickly 3 times, then try adding it to your network again",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1946/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
