import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3130:4944",
            name: "OzwInfoPage",
          },
          { text: "images/ge/14295-dimmer-toggle.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2048/",
            id: "3130",
            name: "ZWProductPage",
            type: "4944",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2048/14295 QSG v0.pdf",
            name: "ProductManual",
          },
          { text: "In-Wall Smart Toggle Dimmer", name: "Name" },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to\ninclude a device to the Z-Wave network.\n2. Once the controller is ready to include your device, press\nand release the top or bottom of the wireless smart dimmer\n(rocker) to include it in the network.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3130",
            name: "FrequencyName",
            type: "4944",
          },
          {
            text: "14295/ZW3004",
            id: "3130",
            name: "Identifier",
            type: "4944",
          },
          {
            text:
              "1. Quickly press ON (up) button (3) times then immediately press the OFF (down) button (3) times. \nNote: This should only be used in the even your network's primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to\nexclude a device from the Z-Wave network.\n2. Once the controller is ready to Exclude your device, press\nand release the top or bottom of the wireless smart dimmer\n(rocker) to exclude it from the network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Transform any home into a smart home with the GE Z-Wave In-Wall Smart Toggle Dimmer. The dimmer enables wireless control of on/off and dim functions of hard-wired dimmable LED/CFL and incandescent lighting. The dimmer replaces your current light switch, uses your existing wiring, and provides Z-Wave wireless and in-wall control of overhead lighting. Use the dimmer feature to customize the lighting output and create the perfect ambiance for any room. Providing ultimate flexibility, the In-Wall Smart Dimmer allows you to operate the switch by itself or easily integrate the switch three-way or four-way wiring configurations by adding the GE Add-On Switch. Single Pole wiring configuration controls the light from one location. Three-way wiring configuration controls the light from two separate locations. Four-way wiring configuration controls the light from three separate locations. The GE Add-On Switch is required for three-way or four-way installations. Take control of your home lighting with GE Z-Wave Wireless Lighting Controls!",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2048/xml",
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
              { index: "3", label: "Basic - Switch", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
