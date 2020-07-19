import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0039:3038:4944",
            name: "OzwInfoPage",
          },
          { text: "images/honeywell/39351-ZW3005.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2724/",
            id: "3038",
            name: "ZWProductPage",
            type: "4944",
          },
          {
            text: "39351 / ZW3005",
            id: "3038",
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
          { text: "In-Wall Dimmer", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3038",
            name: "FrequencyName",
            type: "4944",
          },
          {
            text:
              "Transform any home into a smart home with the Honeywell In-Wall  Dimmer. The In-Wall Dimmer can easily replace any standard in-wall switch and remotely controls a light in your home. Your home will be equipped with ultimate flexibility with the Honeywell Z-Wave Dimmer, capable of being used by itself or with up to four add-on switches. Screw terminal installation provides improved space efficiency when replacing existing switches and the integrated LED indicator light allows you to easily locate the switch in a dark room. The Honeywell Z-Wave In-Wall Dimmer is compatible with any Z-Wave certified gateway, providing access to many popular home automation systems. Take control of your home lighting with Honeywell Z-Wave Smart Controls!",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2724/39351-QSG-v1-para.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2724/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
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
            index: "3",
            label: "LED Light",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets when the LED on the switch is lit.",
            Item: [
              { label: "LED on when light off", value: "0" },
              { label: "LED on when light on", value: "1" },
              { label: "LED always off", value: "2" },
            ],
          },
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
          {
            genre: "config",
            index: "7",
            label: "Z-Wave Command Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "8",
            label: "Z-Wave Command Dim Rate",
            max: "255",
            min: "1",
            type: "short",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            genre: "config",
            index: "9",
            label: "Local Control Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "10",
            label: "Local Control Dim Rate",
            max: "255",
            min: "1",
            type: "short",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            genre: "config",
            index: "11",
            label: "ALL ON/ALL OFF Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "12",
            label: "ALL ON/ALL OFF Dim Rate",
            max: "255",
            min: "1",
            type: "short",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
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
