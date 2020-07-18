import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "In-Wall Smart Toggle Dimmer", name: "Name" },
          {
            text:
              "Transform any home into a smart home with the Honeywell Z-Wave In-Wall Toggle Dimmer. The dimmer enables wireless control of on/off and dim functions of hard-wired dimmable LED/CFL and incandescent lighting. The dimmer replaces your current light switch, uses your existing wiring, and provides Z-Wave wireless and in-wall control of overhead lighting. Use the dimmer feature to customize the lighting output and create the perfect ambiance for any room. Providing ultimate flexibility, the In-Wall Dimmer allows you to operate the switch by itself or easily integrate the switch three-way or four-way wiring configurations by adding the Honeywell Add-On Switch. Single Pole wiring configuration controls the light from one location. Three-way wiring configuration controls the light from two separate locations. Four-way wiring configuration controls the light from three separate locations. The Honeywell Add-On Switch is required for three-way or four-way installations. Take control of your home lighting with Honeywell Z-Wave Smart Controls!",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0039:3130:4944",
            name: "OzwInfoPage",
          },
          {
            text:
              "https://byjasco.com/honeywell-z-wave-plus-wall-smart-dimmer-0",
            name: "ProductPage",
          },
          { text: "images/honeywell/39357-ZW3004.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2727/39357-QSG-v1-para.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to add a device to the Z-Wave network. 2. Once the controller is ready to add your device, press up and release on the toggle to add it in the network",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to remove a device from the Z-Wave network. 2. Once the controller is ready to remove your device, press up and release on the toggle to add it in the network",
            name: "ExclusionDescription",
          },
          {
            text:
              "Quickly press UP button three (3) times then immediately press the DOWN button three (3) times.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2727",
            id: "3130",
            name: "ZWProductPage",
            type: "4944",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3130",
            name: "FrequencyName",
            type: "4944",
          },
          {
            text: "39357 / ZW3004",
            id: "3130",
            name: "Identifier",
            type: "4944",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial creation",
                author: "Eric Clemons",
                date: "31 Jan 2020",
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
              { label: "Default", value: "0" },
              { label: "Invert Switch", value: "1" },
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
            label: "All On/All Off Dim Step",
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
            label: "All On/All Off Dim Rate",
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
              {
                index: "1",
                label: "Supports Lifeline, Multilevel Switch Report",
                max_associations: "5",
              },
              {
                index: "2",
                label:
                  "Supports Basic Set and is controlled with the local load",
                max_associations: "5",
              },
              {
                index: "3",
                label:
                  "Supports Basic Set and is controlled by double pressing the On or Off button",
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
