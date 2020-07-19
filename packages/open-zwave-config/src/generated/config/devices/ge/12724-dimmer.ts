import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 10,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3031:4944",
            name: "OzwInfoPage",
          },
          { text: "images/ge/12724-dimmer.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1197/",
            id: "3031",
            name: "ZWProductPage",
            type: "4944",
          },
          {
            text:
              "Transform any home into a smart home with the GE Z-Wave Smart Fan Control. The in-wall fan control easily replaces any standard in-wall switch remotely controls a ceiling fan in your home and features a three-speed control system. Your home will be equipped with ultimate flexibility with the GE Z-Wave Smart Fan Control, capable of being used by itself or with up to four GE add-on switches. Screw terminal installation provides improved space efficiency when replacing existing switches and the integrated LED indicator light allows you to easily locate the switch in a dark room. The GE Z-Wave Smart Fan Control is compatible with any Z-Wave certified gateway, providing access to many popular home automation systems. Take control of your home lighting with GE Z-Wave Smart Lighting Controls!",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3031",
            name: "FrequencyName",
            type: "4944",
          },
          { text: "In-Wall Smart Fan Control", name: "Name" },
          { text: "http://www.ezzwave.com", name: "ProductPage" },
          {
            text: "12724 / ZW3005",
            id: "3031",
            name: "Identifier",
            type: "4944",
          },
          {
            text: "https://products.z-wavealliance.org/products/1198/",
            id: "3032",
            name: "ZWProductPage",
            type: "4944",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3032",
            name: "FrequencyName",
            type: "4944",
          },
          {
            text: "12725 / ZW3006",
            id: "3032",
            name: "Identifier",
            type: "4944",
          },
          {
            text: "https://products.z-wavealliance.org/products/1201/",
            id: "3033",
            name: "ZWProductPage",
            type: "4944",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3033",
            name: "FrequencyName",
            type: "4944",
          },
          {
            text: "12729 / ZW3004",
            id: "3033",
            name: "Identifier",
            type: "4944",
          },
          {
            text: "https://products.z-wavealliance.org/products/1221/",
            id: "3034",
            name: "ZWProductPage",
            type: "4944",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3034",
            name: "FrequencyName",
            type: "4944",
          },
          { text: "45743", id: "3034", name: "Identifier", type: "4944" },
          {
            text: "https://products.z-wavealliance.org/products/2506/",
            id: "3131",
            name: "ZWProductPage",
            type: "4944",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3131",
            name: "FrequencyName",
            type: "4944",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2506/Binder2.pdf",
            name: "ProductManual",
          },
          {
            text: "14287/ZW4002",
            id: "3131",
            name: "Identifier",
            type: "4944",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to include a device to the Z-Wave network.\n2. Once the controller is ready to include your device, press and release the top or bottom of the smart fan control switch (rocker) to include it in the network.\n3. Once your controller has confirmed the device has been included, refresh the Z-Wave network to optimize performance.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude a device from the Z-Wave network. \n2. Once the controller is ready to Exclude your device, press and release the top or bottom of the wireless smart switch (rocker) to exclude it from the network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Quickly press ON (Top) button three (3) times then immediately press the OFF (Bottom) button three (3) times. The LED will flash ON/OFF 5 times when completed successfully.\nNote: This should only be used in the event your network’s primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1197/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1201/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1202/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1221/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2103/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2506/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 8,
              },
              {
                text: "Update for 3032",
                author: "Shaun Feakes",
                date: "04 Sep 2019",
                revision: 9,
              },
              {
                text: "Add Verifed Change Flag",
                author: "Justin Hammond",
                date: "26 June 2020",
                revision: 10,
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
            type: "byte",
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
            type: "byte",
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
            type: "byte",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
        ],
      },
      {
        id: "38",
        Compatibility: [{ VerifyChanged: [{ text: "true", index: "0" }] }],
      },
    ],
  },
};

export default config;
