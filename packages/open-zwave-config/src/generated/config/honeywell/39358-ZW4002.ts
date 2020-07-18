import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0039:3131:4944",
            name: "OzwInfoPage",
          },
          { text: "images/honeywell/39358-ZW4002.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2725/",
            id: "3131",
            name: "ZWProductPage",
            type: "4944",
          },
          {
            text: "39358 / ZW4002",
            id: "3131",
            name: "Identifier",
            type: "4944",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to\ninclude a device to the Z-Wave network.\n2. Once the controller is ready to add your device,\npress and release the top or bottom of the wireless smart\nswitch (rocker) to add it in the network.\nPlease reference the controller’s manual for instructions.",
            name: "InclusionDescription",
          },
          {
            text:
              "Quickly press ON (Top) button three (3) times then immediately\npress the OFF (Bottom) button three (3) times. The LED will flash\nON/OFF 5 times when completed successfully.\nNOTE: This should only be used in the event your network’s\nprimary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to\nremove a device from the Z-Wave network.\n2. Once the controller is ready to Exclude your device, press\nand release the top or bottom of the wireless smart dimmer\n(rocker) to remove it from the network.",
            name: "ExclusionDescription",
          },
          { text: "In-Wall Fan Control", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3131",
            name: "FrequencyName",
            type: "4944",
          },
          {
            text:
              "Transform any home into a smart home with the Honeywell Z-Wave Fan Control. The in-wall fan control easily replaces any standard in-wall switch remotely controls a ceiling fan in your home and features a three-speed control system. Your home will be equipped with ultimate flexibility with the Honeywell Z-Wave Fan Control, capable of being used by itself or with up to four Honeywell add-on switches. Screw terminal installation provides improved space efficiency when replacing existing switches and the integrated LED indicator light allows you to easily locate the switch in a dark room. The Honeywell Z-Wave Fan Control is compatible with any Z-Wave certified gateway, providing access to many popular home automation systems. Take control of your home lighting with Honeywell Z-Wave Smart Controls!",
            name: "Description",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2725/39358-HQSG-v1-para.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2725/xml",
                author: "Nathan Holben - nathan@holben.me",
                date: "09 May 2020",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "4",
            label: "Invert Switch",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON, if the switch was installed upside down.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic - Load", max_associations: "5" },
              {
                index: "3",
                label: "Basic - Double Tap",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
